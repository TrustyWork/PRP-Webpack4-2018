// лоадер для html, помимо основной функции, нужен для работы HtmlWebPackPlugin

module.exports = isDev => ({
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        minimize: !isDev, // минификация html, тег <pre> сохраняеться
        attrs: ['img:src', 'link:href'], // говорит вебпаку что может быть ссылкой на модуль
        modules: true,
      },
    },
  ],
});
