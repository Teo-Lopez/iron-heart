const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config()

//CONFIGURACION DE LA API
const getToken = require('../../utils/tokenRequest.js')

router.get('/getDiagnosis/:id', (req, res) => {
	getToken().then(_ => {
		let gender = req.user == 'male' ? 0 : 1
		let URILIST = `https://sandbox-healthservice.priaid.ch/symptoms/${req.params.id}/${gender}?token=${process.env.API_TOKEN}&format=json&language=es-es`
		axios
			.get(URILIST)
			.then(response => res.json(response.data))
			.catch(error => console.log(error))
	})
})

module.exports = router
