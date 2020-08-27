module.exports = {
    module: {
      rules: [
        // ... other rules omitted
        {
            test: /\.sass$/,
            use: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  indentedSyntax: true,
                  includePaths: glob.sync('packages/*/node_modules').map((d) => path.join(__dirname, d)),
                  // sass-loader version >= 8
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
        // this will apply to both plain `.scss` files
        // AND `<style lang="scss">` blocks in `.vue` files
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    // plugin omitted
  }