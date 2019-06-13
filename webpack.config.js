const path = require("path");

const rules = {
  js: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
  }
};

module.exports = {
  entry: {
    main: "./main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [rules.js]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};
