const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../models/User.models')
require('dotenv').config()

const getToken = require('../utils/tokenRequest.js')

router.get('/:id', (req, res) => {
	getToken().then(_ => {
		const URI = `https://sandbox-healthservice.priaid.ch/issues/${req.params.id}/info?token=${process.env.API_TOKEN}&format=json&language=en-gb`

		axios
			.get(URI)
			.then(response => {
				console.log(response)
				res.render('diagnostic-details', { data: response.data, user: req.user })
			})
			.catch()
	})
})

router.post('/details', (req, res) => {
	const date = new Date()
	const dateStr = date.toDateString()
	User.findByIdAndUpdate(
		{ _id: req.user._id },
		{ $push: { history: { name: req.body.diagnostic, date: dateStr } } },
		{ new: true }
	)
		.then(user => {
			res.redirect('/profile')
		})
		.catch()
})

module.exports = router
