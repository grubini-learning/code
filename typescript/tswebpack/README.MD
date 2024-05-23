# Webpack

## What is it?

Obtains as an input a variety of different files and bundles into a single file that then we can load a s a single script.

## Install

1. install `pnpm add webpack webpack-cli typescript ts-loader`

## Config

1. Create a `webpack.config.js` with

```typescript

const path = require("path");

module.exports = {
    // entry point, tells webpack where to go into our app and start bundling
    entry: "./src/index.ts",
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
        extensions: [".tsx", ".ts", "js"],
    },
    // what we want webpack to generate
    output: {
        filename: "bundle.js",
        path: path.resolve(\_\_dirname, "dist"),
    },
};
```

2. Adding source maps to help up debug. Take bundle and re map to understandable state

   - Add `devtool: "inline-source-map",` in `webpack.config.js` and uncomment `sourceMap: true` in `tsconfig.json`.

3. Dev Server

   - `pnpm add --save-dev webpack-dev-server`

4. Production configuration, we can point to a different file by using `webpack --config webpack.prod.js`

- we can use `clean-webpack-plugin` to clear output path every time it rebuilds

```typescript
const path = require("path");

module.exports = {
  mode: "production",
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
};
```
