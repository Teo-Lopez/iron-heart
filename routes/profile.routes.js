const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

router.get('/', ensureLoggedIn('/auth/login'), (req, res, next) => res.render('profile', { user: req.user }))

module.exports = router
