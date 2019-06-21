# 服务端渲染（SSR）技术文档

### 应用场景
当你需要使用现代化的框架来开发你的 Web App，并且希望 App 能被搜索引擎更好的索引，还有对首屏渲染时间有要求，这时你就需要对你的 Web App 做服务端渲染！

### 优点与缺点
#### 优点： 
与 SPA 相比，SSR 的优势主要在于：
* 更好的 SEO (Search Engine Optimization)
* 更快的内容到达时间 (time-to-content)

与后端模板引擎渲染相比，SSR 的优势主要在于：
* 更好的项目工程化
    - 基于 Webpack 构建项目
    - 使用 ES6+ 语法
    - CSS 预处理
    - 按需加载
* 更好的组件化开发
    - 优雅的组织组件代码
* 技术栈统一
    - 统一构建和部署，持续集成/持续交付（CI/CD）
    - 规范编码风格
    - 跨项目协作
* 更好的代码复用
    - 有了组件化开发和统一的技术栈，就可以将通用组建抽离出来，以便于复用

#### 缺点： 
与 SPA 相比，使用 SSR 需要注意的地方：
* 宿主环境不一致的局限。
    - 浏览器特定代码只能在某些生命周期里执行
    - 一些外部的 lib 可能需要额外处理，才能再同构应用中运行
* 更多的服务器负载。
    - 相对于模板引擎渲染，SSR 消耗更多的 CPU 及 Memory
* 部署要求更高。
    - 与 SPA 相比，SSR 需要依赖 Node server，而 SPA 仅仅是一堆静态文件

与后端模板引擎渲染相比，使用 SSR 需要注意的：
* 更多的服务器负载
* 技术栈转换

### 注意的点
* 接口请求会在浏览器端和服务端被调用。因此，需要用一个能在两个平台都能运行的库（[axios](https://github.com/axios/axios)、[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)）
* Vue在浏览器端的数据绑定是响应的，但在服务端渲染时，数据响应是被禁用的
* 在服务端渲染时，只有 `beforeCreate` 和 `created` 生命周期挂钩被调用。因此，只能在这两个挂钩写一些通用代码
* 通用代码指的是不能包含带有副作用的代码（timer）和平台特性代码（window、document）
* 大多数自定义指令直接操作 DOM，因此会在服务器端渲染过程中导致错误
    - 将指令转为组件
    - 根据环境变量判断是否在服务端渲染

### 脚手架构建
自建脚手架的优势：
* 自定义程度高

劣势：
* 需要维护（文档、脚手架生成器、架构升级）


```
.
├── README.md
├── build                               # webpack的配置
│   ├── setup-dev-server.js
│   ├── webpack.base.config.js
│   ├── webpack.client.config.js
│   └── webpack.server.config.js
├── dist                                # 打包后的静态文件
├── manifest.json                       # PWA的配置
├── package-lock.json
├── package.json
├── public                              # 静态转发目录
│   ├── logo-48.png
│   └── logo-64.png
├── server.js                           # Node服务入口
└── src                                 # 源码
    ├── App.vue
    ├── api                             # 接口封装
    │   ├── create-api-client.js
    │   ├── create-api-server.js
    │   └── index.js
    ├── app.js                          # 应用入口
    ├── components                      # 通用组件
    │   ├── Comment.vue
    │   ├── Item.vue
    │   ├── ProgressBar.vue
    │   └── Spinner.vue
    ├── entry-client.js                 # 客户端入口
    ├── entry-server.js                 # 服务端入口
    ├── index.template.html             # 渲染模板
    ├── router                          # 路由
    │   └── index.js
    ├── store                           # 状态树
    │   ├── actions.js
    │   ├── getters.js
    │   ├── index.js
    │   └── mutations.js
    ├── util                            # 工具函数
    │   ├── filters.js
    │   └── title.js
    └── views                           # 页面
        ├── CreateListView.js
        ├── ItemList.vue
        ├── ItemView.vue
        └── UserView.vue
```

### 框架介绍
这里主要介绍的是[Nuxt.js](https://nuxtjs.org/)这个框架。此框架有一下几大优势：
* Nuxt预设了很多基础配置，开箱即用
* 可以方便的继承到其他Node服务框架，如：Express、Koa等
* 可以方便的生成静态页
* 可以方便生产PWA应用
* 可以方便写测试用例
* 提供了好用的中间件和插件机制
* 提供了优雅的配置方式
* 强大的社区支持（拥有完善的文档、常用的模块、足够测试用例）

```
.
├── README.md
├── assets                  # 为编译的资源文件，如：scss、images、fonts
│   └── README.md
├── components              # 通用组件
│   ├── Logo.vue
│   └── README.md
├── jest.config.js
├── layouts                 # 布局
│   ├── README.md
│   └── default.vue
├── middleware              # 中间件
│   └── README.md
├── nuxt.config.js          
├── package-lock.json
├── package.json
├── pages                   # 页面，Nuxt将会根据文件目录自动生成路由
│   ├── README.md
│   └── index.vue
├── plugins                 # 插件
│   └── README.md
├── static                  # 静态目录
│   ├── README.md
│   ├── favicon.ico
│   └── icon.png
├── store                   # 状态树
│   └── README.md
└── test                    # 测试
    └── Logo.spec.js
```

### 过往的经验
在过往的工作中，有用自建脚手架和Nuxt各自开发过多个项目，说说感受吧！
* 在框架上，Nuxt用起来比较爽，没有遇到跨不过去的坑，推荐使用
* 可能一些组件需要特殊处理，如：分页组件，
* 在HTML里需要注入初始数据，这在目前是必须的，无法去掉

### 参考
> * [Vue.js 服务器端渲染指南 | Vue SSR 指南](https://ssr.vuejs.org/zh/)
> * [Nuxt.js - The Vue.js Framework](https://nuxtjs.org/)