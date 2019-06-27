function getSeo(vm) {
  const { seo } = vm.$options;

  if (seo) {
    return typeof seo === "function" ? seo.call(vm) : seo;
  }

  return null;
}

const serverSeoMixin = {
  created() {
    const seo = getSeo(this);

    if (seo) {
      this.$ssrContext.title = `${seo.title} - View SSR`;
      this.$ssrContext.keywords = seo.keywords;
      this.$ssrContext.description = seo.description;
    }
  }
};

const clientSeoMixin = {
  mounted() {
    const seo = getSeo(this);

    if (seo) {
      document.title = `${seo.title} - View SSR`;
      document
        .querySelector('[name="keywords"]')
        .setAttribute("content", seo.keywords);
      document
        .querySelector('[name="description"]')
        .setAttribute("content", seo.description);
    }
  }
};

export default (process.env.VUE_ENV === "server"
  ? serverSeoMixin
  : clientSeoMixin);
