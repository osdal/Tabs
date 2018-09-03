let path = require('path'); // Чтобы указать абсолютный путь

let conf = {
	entry: './js/bundle/script.js', // Откуда
	output: { // Куда
		path : path.resolve(__dirname, './dist-js/'), // В какую папку
		filename: 'bundler.js', // Как назвать файл
		publicPath: 'dist-js/' // За кем следить
	}, // Указываем пути к файлам

	module: {
		rules: [
			{
				test: /\.js$/, // Использовать регулярное выражение
				loader: 'babel-loader'
			}
		]
	},
	watch: true,
	devtool: 'cheap-eval-source-map'

}

module.exports = conf;