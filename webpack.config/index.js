const path = require('path');

// Плагины
const HtmlWebPackPlugin = require('html-webpack-plugin'); // автоматически генерирует html страницу для нашего кода
const CleanWebpackPlugin = require('clean-webpack-plugin'); // чистит папку dist от файлов старых сборок

// Лоадеры
const JSLoader = require('./loaders/js.js');
const HtmlLoader = require('./loaders/html.js');
const StyleLoader = require('./loaders/style.js');
const ImageLoader = require('./loaders/image.js');
const FileLoader = require('./loaders/file.js');

// настройки Webpack dev server
const devServerConfig = require('./devServer.js');

module.exports = (arg, { mode }) => {
  const isDev = mode === 'development';

  const plugins = [
    new CleanWebpackPlugin(path.resolve(__dirname, '../dist')),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
    }),
  ];

  const loaderRules = [
    JSLoader(isDev),
    HtmlLoader(isDev),
    StyleLoader(isDev),
    ImageLoader(isDev),
    FileLoader(isDev),
  ];

  const devServer = devServerConfig(isDev);

  const config = {
    entry: { main: path.resolve(__dirname, '../src/index.jsx') }, // точки входа
    module: { rules: loaderRules }, // Лоадеры
    plugins, // Плагины
    resolve: {
      modules: [path.join(__dirname, '../src'), 'node_modules'], // аналог NODE_PATH=.
      extensions: ['.js', '.jsx'], // Какие модули искать если расширение не указано
    },
    devtool: isDev ? 'cheap-module-source-map' : false, // Соурсмапы для JS
    performance: { // Предупреждать о больших файлах, в байтах
      maxAssetSize: 1024 * 450, // размер одного файла
      maxEntrypointSize: 1024 * 2000, // весь код целиком
      hints: false,
    },
    devServer,
  };

  return config;
};
