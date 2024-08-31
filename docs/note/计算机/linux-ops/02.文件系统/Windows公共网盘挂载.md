# Windows公共网盘挂载

## 挂载
安装 CIFS 工具：
```
sudo yum install cifs-utils
```

创建挂载目录：
```
mkdir /mnt/server21
```

执行挂载：
```
mount -t cifs //10.160.0.104/shared_folder /mnt/server21 -o username=your_username,password=your_password,vers=3.0
```

## 设置开机时自动挂载

打开/etc/fstab文件以编辑：
```
vim /etc/fstab
```

在文件的末尾添加一行，用于描述 Windows 共享文件夹的挂载信息：
```
//10.160.0.104/shared_folder /mnt/sys21 cifs username=your_username,password=your_password
```


测试：
```
mount -a
```

如果没有错误，不会返回任何输出。

现在，当系统重新启动时，共享文件夹将会自动挂载到指定的目录。如果你希望取消自动挂载，只需在 /etc/fstab 文件中删除相应的行即可。