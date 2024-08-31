import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yangsen's notes",
  description: "致知·笃行",
  themeConfig: {
    outline: {
      level: [2,6],
      label: '页面导航'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '英语', 
        items: [
          { text: '语法', link: '/note/英语/语法/01.基本句型/五种基本句型.md' },
        ]
      },
      { text: '社科', 
        items: [
          { text: '史记', link: '/note/社科/史记/01.上古传说/三皇.md' },
        ]
      },
      { text: '计算机', 
        items: [
          { text: 'Docker', link: '/note/计算机/docker/01.运维/安装.md' },
          { text: 'Redis', link: '/note/计算机/redis/01.运维/部署单节点实例.md' },
          { text: 'InfluxDB', link: '/note/计算机/influxdb/01.运维/核心概念.md' },
          { text: 'Vim', link: '/note/计算机/vim/01.使用技巧/移动光标.md' },
          { text: 'LoadRunner', link: '/note/计算机/loadrunner/01.基础理论/性能指标.md' },
          { text: 'Linux运维', link: '/note/计算机/linux-ops/01.监控/Docker安装Netdata.md' },
        ]
      }
    ],
    sidebar: {
      '/note/英语/语法/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '1.基本句型',
              collapsed: false,
              items: [
                { text: '五种基本句型', link: '/note/英语/语法/01.基本句型/五种基本句型.md' },
              ]
            },
            { 
              text: '2.词性',
              collapsed: false,
              items: [
                { text: '名词', link: '/note/英语/语法/02.词性/名词.md' },
                { text: '动词', link: '/note/英语/语法/02.词性/动词.md' },
              ]
            },
          ]
        },
      ],
      '/note/社科/史记/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '1.上古传说',
              collapsed: false,
              items: [
                { text: '三皇', link: '/note/社科/史记/01.上古传说/三皇.md' },
              ]
            },
          ]
        }
      ],
      '/note/计算机/docker/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '01.运维',
              collapsed: false,
              items: [
                { text: '安装', link: '/note/计算机/docker/01.运维/安装.md' },
                { text: '配置文件', link: '/note/计算机/docker/01.运维/配置文件.md' },
                { text: '切换镜像仓库', link: '/note/计算机/docker/01.运维/切换镜像仓库.md' },
              ]
            },
          ]
        }
      ],
      '/note/计算机/git/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '01.常用功能',
              collapsed: false,
              items: [
                { text: '创建ssh密钥', link: '/note/计算机/git/01.常用功能/f.md' },
                { text: '远程仓库设置', link: '/note/计算机/git/01.常用功能/远程仓库设置.md' },
              ]
            },
          ]
        }
      ],
      '/note/计算机/redis/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '01.运维',
              collapsed: false,
              items: [
                { text: '部署单节点实例', link: '/note/计算机/redis/01.运维/部署单节点实例.md' },
              ]
            },
            { 
              text: '02.数据类型',
              collapsed: false,
              items: [
                { text: 'Set(集合)', link: '/note/计算机/redis/02.数据类型/set.md' },
              ]
            },
          ]
        }
      ],
      '/note/计算机/influxdb/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '01.运维',
              collapsed: false,
              items: [
                { text: '部署单节点实例', link: '/note/计算机/influxdb/01.运维/部署单节点实例.md' },
                { text: '核心概念', link: '/note/计算机/influxdb/01.运维/核心概念.md' },
              ]
            },
            { 
              text: '02.Flux语言',
              collapsed: false,
              items: [
                { text: '简介', link: '/note/计算机/influxdb/02.Flux语言/简介.md' },
                { text: '数据模型', link: '/note/计算机/influxdb/02.Flux语言/数据模型.md' },
              ]
            },
            { 
              text: '03.查询案例',
              collapsed: false,
              items: [
                { text: '机况', link: '/note/计算机/influxdb/03.查询案例/机况.md' },
                { text: '每小时产量', link: '/note/计算机/influxdb/03.查询案例/每小时产量.md' },
              ]
            },
          ]
        }
      ],
      '/note/计算机/vim/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '01.使用技巧',
              collapsed: false,
              items: [
                { text: '移动光标', link: '/note/计算机/vim/01.使用技巧/移动光标.md' },
                { text: '替换字符串', link: '/note/计算机/vim/01.使用技巧/替换字符串.md' },
              ]
            },
          ]
        }
      ],
      '/note/计算机/loadrunner/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '01.基础理论',
              collapsed: false,
              items: [
                { text: '性能指标', link: '/note/计算机/loadrunner/01.基础理论/性能指标.md' },
                { text: 'Win12安装LoadRunner11', link: '/note/计算机/loadrunner/01.基础理论/Win12安装LoadRunner11.md' },
              ]
            },
            { 
              text: '02.脚本录制',
              collapsed: false,
              items: [
                { text: '本地代理录制', link: '/note/计算机/loadrunner/02.脚本录制/本地代理录制.md' },
                { text: '录制选项设置', link: '/note/计算机/loadrunner/02.脚本录制/录制选项设置.md' },
                { text: '脚本优化', link: '/note/计算机/loadrunner/02.脚本录制/脚本优化.md' },
                { text: '脚本回放设置', link: '/note/计算机/loadrunner/02.脚本录制/脚本回放设置.md' },
                { text: '脚本参数', link: '/note/计算机/loadrunner/02.脚本录制/脚本参数.md' },
                { text: '规则关联', link: '/note/计算机/loadrunner/02.脚本录制/规则关联.md' },
                { text: '事务', link: '/note/计算机/loadrunner/02.脚本录制/事务.md' },
                { text: '结果检查', link: '/note/计算机/loadrunner/02.脚本录制/结果检查.md' },

              ]
            },
          ]
        }
      ],
      '/note/计算机/linux-ops/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '01.网络设置',
              collapsed: false,
              items: [
                { text: '防火墙设置', link: '/note/计算机/linux-ops/01.网络设置/防火墙设置.md' },
                { text: '网络抓包', link: '/note/计算机/linux-ops/01.网络设置/网络抓包.md' },
              ]
            },
            { 
              text: '02.文件系统',
              collapsed: false,
              items: [
                { text: 'Windows公共网盘挂载', link: '/note/计算机/linux-ops/02.文件系统/Windows公共网盘挂载.md' },
              ]
            },
            { 
              text: '03.监控',
              collapsed: false,
              items: [
                { text: 'Docker安装Netdata', link: '/note/计算机/linux-ops/03.监控/Docker安装Netdata.md' },
              ]
            }
          ]
        }
      ],
    },
  }
})
