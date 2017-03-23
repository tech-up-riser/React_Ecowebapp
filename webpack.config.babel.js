import path from 'path';
import { DefinePlugin } from 'webpack';

export default {
  entry: [
    'babel-polyfill',
    path.join(__dirname, './src/client.js'),
  ],
  output: {
    path: path.join(__dirname, './public'),
    filename: "app.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /(node_modules|public|flow-typed|__tests__|__mocks__)/,
        ],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify(process.env.NODE_ENV),
       },
    }),
  ],
};
