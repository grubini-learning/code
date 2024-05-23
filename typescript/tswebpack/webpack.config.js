const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // entry point, tells webpack where to go into our app and start bundling
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  module: {
    // Rules are what to do when webpack encounters different types of files
    rules: [
      {
        // if it finds a match for files ending in ts or tsx use ts-loader
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    //list of file extensions that we want webpack to resolve
    extensions: [".tsx", ".ts", ".js"],
  },
  // what we want webpack to generate
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
  plugins: [new CleanWebpackPlugin()],
};
