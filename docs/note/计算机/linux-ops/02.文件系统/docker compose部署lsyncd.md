# docker compose部署lsyncd

## 说明

假设源服务器的 IP 是 10.190.0.196 ，目标服务器的 IP 是 10.190.0.194 。

我们要把 196 上的 /home/data 目录和 194 的 /home/data 目录做同步。

## 准备工作

### 创建 ssh 密钥对

在 196 上为 lsyncd 创建一个工作目录：

```sh
mkdir -p /home/lsyncd

cd /home/lsyncd
```

创建 ssh 密钥对：

```sh
ssh-keygen -t rsa -b 4096 -C "lsyncd-docker" -f ./lsyncd-key
```

得到 lsyncd-key 和 lsyncd-key.pub 两个文件。

lsyncd-key.pub 文件要配置到 194 服务器上。

设置权限：

```sh
chmod 600 lsyncd-key
```

### 在目标服务器上配置 ssh key

在 194 上执行。

我们使用 root 用户，进入 root 用户的主目录：

```sh
cd /root
```

创建 .ssh 目录：

```sh
mkdir -p .ssh && chmod 700 .ssh
```

创建 authorized_keys 文件，并将 lsyncd-key.pub 文件的内容存放于其中：

```sh
vim authorized_keys
```

设置权限：

```sh
chmod 600 .ssh/authorized_keys
```

### 测试 ssh 是否正常工作

```sh
ssh -i ./lsyncd-key root@10.190.0.194
```

### 获取主机指纹

在 196 上执行：

```sh
ssh-keyscan 10.190.0.194 > known_hosts
```

### 创建 lsyncd 配置文件

在 196 上执行：

```sh
-- lsyncd.conf.lua
settings {
    logfile    = "/var/log/lsyncd/lsyncd.log",
    statusFile = "/var/log/lsyncd/lsyncd.status",
    statusInterval = 1,
    maxProcesses = 1
}

sync {
    default.rsyncssh,
    source = "/data/source",
    host = "root@10.190.0.194",
    targetdir = "/home/data",
    rsync = {
        archive = true,
        compress = true,
        whole_file = false
    },
    ssh = {
        port = 22,
        identityFile = "/root/.ssh/id_rsa"
    }
}
```

## Dockerfile

```sh
FROM alpine:3.14

RUN apk add --no-cache lsyncd openssh-client rsync
RUN mkdir -p /etc/lsyncd /root/.ssh

COPY known_hosts /root/.ssh/
COPY lsyncd.conf.lua /etc/lsyncd/
CMD ["lsyncd", "-nodaemon", "/etc/lsyncd/lsyncd.conf.lua"]
```

## docker-compose.yml

```yaml
version: '3'

services:
  lsyncd:
    image: lsyncd:v1
    container_name: lsyncd-sync
    restart: unless-stopped
    volumes:
      - /home/data/:/data/source
      - ./lsyncd-key:/root/.ssh/id_rsa
      - ./logs/:/var/log/lsyncd/
    environment:
      - TZ=Asia/Shanghai
```
