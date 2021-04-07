const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../../models/User.models')
const Locations = require('../../models/bodyLocations.models')
require('dotenv').config()

const getToken = require('../../utils/tokenRequest.js')

router.get('/:id', (req, res, next) => {
	Locations.find({ ID: req.params.id })
		.then(fullList => {
			res.json(fullList)
		})
		.catch(err => console.log(err))
})

router.get('/:id/list', (req, res, next) => {
	getToken(_ => {
		const URILocations = `https://sandbox-healthservice.priaid.ch/symptoms/48/0?token=${process.env.API_TOKEN}&format=json&language=es-es`
		axios
			.get(URILocations)
			.then(response => res.json(response))
			.catch()
	})
})

module.exports = router
