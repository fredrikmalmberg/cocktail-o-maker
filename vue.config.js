const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    //proxy: 'http://www.thecocktaildb.com/api/json/v1/1/',
    proxy: {
      "^/api/json/v1/1/": {
      target: 'http://www.thecocktaildb.com/',
      ws: true,
      changeOrigin: true
      }
    }
  }
})
