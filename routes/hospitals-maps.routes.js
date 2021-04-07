const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('hospitals-map', { user: req.user, key: process.env.MAPS_KEY })
})

module.exports = router
