module.exports = {
    chainWebpack: config => {
      config.module
        .rule('assets')
          .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
    }
  }