module.exports = () => ({
  test: /\.(eot|svg|ttf|woff2?)$/, // любые файлы которые ненадо никак орабатывать а просто копируються как есть
  exclude: /node_modules/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'assets/[hash:8].[ext]',
    },
  },
});
