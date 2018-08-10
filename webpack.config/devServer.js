const path = require('path');

module.exports = () => ({
  watchOptions: {
    ignored: /node_modules/,
  },
  contentBase: path.join(__dirname, '../src'), // где искать модули
  port: 5000, // очевидно, порт
  compress: true, // сжатие файлов
  hot: false, // Горячая перезагрузка модулей. Неплоха, но я просто недоверяю ей.
  historyApiFallback: true, // пересылать 404 на index.html, для сайтов на HTML5 History API
  overlay: {
    warnings: true,
    errors: true,
  },
  proxy: { // Прокси для пересылки запросов на бек
    '/socket.io/*': {
      target: 'http://localhost:5000',
      ws: true,
    },
    '/upload/*': 'http://localhost:5000', // папка аплоада на сервере
  },
});
