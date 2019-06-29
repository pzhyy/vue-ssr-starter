const querystring = require('querystring')

exports.getPrevPageUrl = ctx => {
  const { path, url, query } = ctx
  const { page = '0' } = query
  const currentPage = Number(page)

  if (currentPage > 1) {
    const prevPage = currentPage - 1
    const qs = querystring.stringify({ ...query, page: prevPage })
    const url = `${path}?${qs}`

    return url
  }

  return url
}

exports.getNextPageUrl = ctx => {
  const { path, url, query } = ctx
  const { page = '1' } = query
  const currentPage = Number(page)

  if (currentPage < 10) {
    const nextPage = currentPage + 1
    const qs = querystring.stringify({ ...query, page: nextPage })
    const url = `${path}?${qs}`

    return url
  }

  return url
}
