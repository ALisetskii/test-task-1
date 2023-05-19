const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getConfig = require('./config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './public/[name].[ext]',
          },
        },
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      '@shared': getConfig('appShared'),
      '@styles': getConfig('appStyles'),
      '@entities': getConfig('appEntities'),
      '@features': getConfig('appFeatures'),
      '@widgets': getConfig('appWidgets'),
      '@processes': getConfig('appProcesses'),
      '@pages': getConfig('appPages'),
      '@src': getConfig('appDir'),
      '@packageSrc': getConfig('appPackageJson'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.ttf'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
