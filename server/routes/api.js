const express = require('express')
const router = express.Router()

const { models } = require('../models')
const Contact = models.Contact

router.get('/', async (req, res) => {
	const contacts = await Contact.find().sort({ name: 'asc' })
	res.status(200).json({
		body: {
			contacts,
		},
	})
})

router.post('/', async (req, res) => {
	try {
		const contact = await Contact.create(req.body)
		res.status(200).json({
			body: {
				contact,
			},
		})
	} catch (err) {
		res.status(400).json({
			error: err.message
		})
	}
})

router.put('/:id', async (req, res) => {
	console.log(req.body)
	try {
		await Contact.findByIdAndUpdate(req.params.id, req.body)
		const contact = await Contact.findById(req.params.id)
		res.status(200).json({
			body: {
				contact,
			},
		})
	} catch (err) {
		res.status(400).json({
			error: err.message
		})
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const contact = await Contact.findByIdAndDelete(req.params.id)
		res.status(200).json({
			body: {
				contact,
			},
		})
	} catch (err) {
		res.status(400).json({
			error: err.message
		})
	}
})

module.exports = router
