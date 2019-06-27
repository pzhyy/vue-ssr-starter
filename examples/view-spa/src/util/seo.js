function getSeo(vm) {
  const { seo } = vm.$options

  if (seo) {
    return typeof seo === 'function' ? seo.call(vm) : seo
  }

  return null
}

const clientSeoMixin = {
  mounted() {
    const seo = getSeo(this)

    if (seo) {
      document.title = `${seo.title} - View SPA`
      document
        .querySelector('[name="keywords"]')
        .setAttribute('content', seo.keywords)
      document
        .querySelector('[name="description"]')
        .setAttribute('content', seo.description)
    }
  }
}

export default clientSeoMixin
