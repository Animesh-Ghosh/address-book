const mongoose = require('mongoose')
const Contact = require('./contact')

function connect() {
	const url = 'mongodb://localhost:27017/address-book'
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
}

const models = { Contact }

module.exports = {
	connect,
	models,
}
