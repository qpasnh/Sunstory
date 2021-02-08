const path = require("path");

module.exports = {
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
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhiteSpace: false
                }
              }
            },
            {
              loader: '@tianyong90/vue-markdown-loader',
              options: {
                contentCssClass: 'general-typo sotap-typo',
                markdown: {
                  lineNumbers: true,
                }
              }
            }
          ]
        }
      ],
    },
  },
};
