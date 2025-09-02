const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
      publicPath: "/",
    clean: true,
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], 
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
