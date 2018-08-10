module.exports = () => ({
  test: /\.(png|jpg|jpeg|gif|tiff|webp|ico)$/, // картинки
  exclude: /node_modules/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 1024 * 10, // base64 для картинок меньше 10кб
        name: 'assets/[hash:8].[ext]', // хеши чтобы избежать дубликатов файлов
      },
    },
  ],
});
