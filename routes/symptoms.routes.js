const express = require('express')
const router = express.Router()
const axios = require('axios')
const Symptoms = require('../models/Symptoms.models')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
require('dotenv').config()

//CONFIGURACION DE LA API
const getToken = require('../utils/tokenRequest.js')

// Petición GET de los SYMPTOM
router.get('/', ensureLoggedIn('/auth/login'), (req, res, next) => {
	Symptoms.find()
		.then(allSymptoms =>
			res.render('symptoms', { symptoms: allSymptoms.map(element => element.Name), user: req.user })
		)
		.catch(error => console.log(error))
})

router.post('/', (req, res, next) => {
	getToken().then(() => {
		const URI = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${Object.values(
			req.body
		)}]&gender=${req.user.gender}&year_of_birth=${req.user.year_of_birth}&token=${
			process.env.API_TOKEN
		}&format=json&language=en-gb`
		console.log(URI)
		axios
			.get(URI)
			.then(response => res.render('diagnostic', { data: response.data }))
			.catch(err => console.log(err))
	})
})

module.exports = router
