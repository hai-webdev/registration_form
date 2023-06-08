const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    assetsDir: "static-vue",
    devServer: {
      proxy: {
        "/api.php": {
          target: "http://jxzzzxw.com/",
        },
      },
    },
})
