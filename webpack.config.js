var jquery = require("jquery");
var webpack = require("webpack");
var HtmlPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: [
    "bootstrap-sass!./bootstrap-sass.config.js",
    "./app/scripts/main.jsx"
  ],
  output: {
    path: __dirname + "/app/public",
    filename: "main.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bootstrap-sass\.config)/,
        loader: "eslint"
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: "imports?jQuery=jquery"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass?outputStyle=expanded"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    root: __dirname + "/app/scripts",
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    }),
    new HtmlPlugin({
      template: __dirname + "/app/index.html",
      inject: "body"
    }),
    new ExtractTextPlugin("main.css")
  ],
  watchOptions: {
    poll: true
  }
};
