// лоадер css и scss
module.exports = isDev => ({
  test: /\.s?css$/,
  exclude: /node_modules/,
  use: [
    { loader: 'style-loader' }, // css будет храниться вместе с JS
    {
      loader: 'css-loader', // Лоадер обычного css
      options: {
        modules: true, // Генерирует уникальные имена для классов. Аналог :local(), но используеться всегда.
        importLoaders: 2, // Надо обработать еще два лоадера(postcss и sass) спецыфическая настройка
        sourceMap: isDev,
      },
    },
    {
      loader: 'postcss-loader', // Минификация, автопрефиксы, его настрйоки в postcss.config.js
      options: {
        sourceMap: isDev,
      },
    },
    {
      loader: 'sass-loader', // Очевидно, sass/scss лоадер
      options: {
        sourceMap: isDev, // Соурсмапы для коректной работы должны быть включены везде.
      },
    },
  ],
});
