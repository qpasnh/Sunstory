const path = require("path");

module.exports = {
  pwa: {
    name: "SoTap",
    themeColor: "#fcd307",
    msTileColor: "#fcd307",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    workboxPluginMode: "GenerateSW",
    iconPaths: {
      faviconSVG: null,
      favicon32: "icons/logo-32x32.png",
      favicon16: "icons/logo-16x16.png",
      appleTouchIcon: null,
      maskIcon: null,
      msTileImage: "icons/logo-144x144.png",
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/css/*.less")],
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: "vue-loader",
              options: {
                compilerOptions: {
                  preserveWhiteSpace: false,
                },
              },
            },
            {
              loader: "@tianyong90/vue-markdown-loader",
              options: {
                contentCssClass: "general-typo sotap-typo",
                markdown: {
                  lineNumbers: true,
                },
              },
            },
          ],
        },
      ],
    },
  },
};
