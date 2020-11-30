const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

const mongoose = require('mongoose')
const api = require('./routes/api')

const { connect } = require('./models')

app.use(cors())
app.use(express.json())
app.use('/api', api)

connect().then(() => {
	app.listen(port, () => {
		console.log(`address-book server listening at http://localhost:${port}`)
	})
}).catch(err => {
	if (err.message.includes('ECONNREFUSED')) {
		console.error('Initial connection to MongoDB failed. Exiting...')
		process.exit(1)
	}
})
