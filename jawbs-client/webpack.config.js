const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env) => {
  return [
    {
      entry: ["./src/client/index.tsx"],
      mode: "development",
      target: "web",
      output: {
        path: path.resolve(__dirname, "dist/client"),
        filename: "client_bundle.js",
      },
      devServer: {
        port: 3000,
        host: "0.0.0.0",
        proxy: {
          "/": `http://api:3001`,
        },
        hot: true,
      },
      watchOptions: {
        poll: true,
      },
      resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx"],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/client/index.html",
        }),
        new ESLintPlugin({
          files: ["src/**/*.ts", "src/**/*.tsx"],
        }),
      ],
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: "ts-loader",
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript",
                ],
              },
            },
          },
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, "src"),
            use: ["style-loader", "css-loader", "postcss-loader"],
          },
          {
            test: /\.(png|svg|ttf)$/i,
            type: "asset/resource",
          },
        ],
      },
    },
  ];
};
