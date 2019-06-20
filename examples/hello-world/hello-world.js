// 第一步：创建一个 Vue 实例
const Vue = require('vue')
const Renderer = require('vue-server-renderer')
const app = new Vue({
    template: `<div>hello world</div>`
})

// 第二步：创建一个 renderer
const renderer = Renderer.createRenderer()

// 第三步：将 Vue 实例渲染为 HTML
renderer.renderToString(app).then(html => {
    console.log('html:', html)
}).catch(error => {
    console.log('error:', error)
})
