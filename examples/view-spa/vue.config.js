module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3003
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/styles/env.scss";`
      }
    }
  }
}
