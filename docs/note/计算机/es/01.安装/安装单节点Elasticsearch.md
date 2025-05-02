# 安装单节点Elasticsearch

## docker-compose.yml

[docker compose 配置文件](https://github.com/yungsem/docker-compose/tree/main/es)

配置文件，可以从原始安装包中找到。原始安装包下载地址：

- [Elasticsearch latest](https://www.elastic.co/downloads/elasticsearch)
- [Kibana latest](https://elastic.co/downloads/kibana)

## 验证

访问地址：http://192.168.31.100:9200/ ，浏览器输出：

```json
{
  "name" : "e061551e4caa",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "Xv0oz2MoRFu3U4hv9eVbHg",
  "version" : {
    "number" : "8.18.0",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "04e979aa50b657bebd4a0937389308de82c2bdad",
    "build_date" : "2025-04-10T10:09:16.444104780Z",
    "build_snapshot" : false,
    "lucene_version" : "9.12.1",
    "minimum_wire_compatibility_version" : "7.17.0",
    "minimum_index_compatibility_version" : "7.0.0"
  },
  "tagline" : "You Know, for Search"
}

```

表示 Elasticsearch 安装成功。

访问地址：http://192.168.31.100:5601/ ，查看 Kibana 是否安装成功。

## 参考

[Install Elasticsearch with Docker](https://www.elastic.co/docs/deploy-manage/deploy/self-managed/install-elasticsearch-with-docker)
