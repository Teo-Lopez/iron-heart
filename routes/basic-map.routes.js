const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('basic-map', { user: req.user })
})

module.exports = router
