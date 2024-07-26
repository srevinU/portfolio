const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = () => {
  console.info("Environment: ", process.env.NODE_ENV);
  console.info("Directory: ", __dirname);
  return {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/",
      assetModuleFilename: "assets/[name][ext]",
    },
    devServer: {
      compress: true,
      port: 3000,
      static: {
        directory: path.resolve(__dirname, "build"),
      },
      historyApiFallback: true,
    },
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, `./env/.env.${process.env.NODE_ENV}`),
        systemvars: true,
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "build", "index.html"),
        filename: "index.html",
        favicon: "./public/favicon.ico",
        manifest: "./public/manifest.json",
        inject: "body",
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
      fallback: {
        https: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
        },
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
