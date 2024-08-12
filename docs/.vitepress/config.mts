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
          { text: '性能测试', link: '/note/计算机/pt/01.基础理论/性能指标.md' },
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
              ]
            },
          ]
        }
      ],
      '/note/计算机/pt/': [
        {
          text: '',
          items: [
            // 章节
            { 
              text: '01.基础理论',
              collapsed: false,
              items: [
                { text: '性能指标', link: '/note/计算机/pt/01.基础理论/性能指标.md' },
              ]
            },
          ]
        }
      ],
    },
  }
})
