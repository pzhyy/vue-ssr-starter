exports.index = async ctx => {
  const data = {
    seo: {
      title: 'About - View MVC',
      keywords: 'view mvc',
      description: 'this is a view mvc'
    },
    head: `
    <link rel="stylesheet" type="text/css" href="/css/chunk-ab1320fc.b5eeb5d1.css">
    <script charset="utf-8" src="/js/chunk-ab1320fc.ce3231b4.js"></script>
    `,
    active: 'About'
  }

  await ctx.render('about', data)
}