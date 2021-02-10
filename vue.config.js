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
      faviconSVG: "./src/assets/logo.svg",
      favicon32: "./src/assets/icons/logo-32x32.png",
      favicon16: "./src/assets/icons/logo-16x16.png",
      appleTouchIcon: null,
      maskIcon: null,
      msTileImage: "./src/assets/icons/logo-144x144.png",
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/css/*.less")],
    },
  },
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
