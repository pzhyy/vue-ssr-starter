const fs = require('fs')
const Vue = require('vue')
const server = require('express')()
const template = fs.readFileSync('./index.template.html', 'utf-8')
const renderer = require('vue-server-renderer').createRenderer({
    template
})

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>你访问的 URL 是：{{ url }}</div>`
    })
    const context = {
        title: 'Hello World With Template',
        meta: `
            <meta name="renderer" content="webkit" />
        `
    }

    renderer
        .renderToString(app, context)
        .then(html => {
            res.end(html)
        })
        .catch(error => {
            console.error('error', error)
            res.status(500).end('Internal Server Error')
        })
})

server.listen(3000)
console.log('Server started at: http://localhost:3000')
