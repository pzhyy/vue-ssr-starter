const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>你访问的 URL 是：{{ url }}</div>`
    })

    renderer
        .renderToString(app)
        .then(html => {
            res.end(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <title>Hello World With Express</title>
                    </head>
                    <body>
                        ${html}
                    </body>
                </html>
            `)
        })
        .catch(error => {
            console.error('error', error)
            res.status(500).end('Internal Server Error')
        })
})

server.listen(3000)
console.log('Server start with: http://localhost:3000')
