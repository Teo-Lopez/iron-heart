const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User.models')
const bcrypt = require('bcrypt')

module.exports = app => {
	passport.serializeUser((loggedInUser, cb) => {
		cb(null, loggedInUser._id)
	})

	passport.deserializeUser((userIdFromSession, cb) => {
		User.findById(userIdFromSession)
			.then(userDocument => {
				cb(null, userDocument)
			})
			.catch(err => {
				cb(err)
			})
	})

	passport.use(
		new LocalStrategy(
			{
				usernameField: 'username',
				passwordField: 'password',
			},
			(username, password, done) => {
				User.findOne({ username })
					.then(foundUser => {
						if (!foundUser) {
							done(null, false, { message: 'Incorrect username' })
							return
						}

						if (!bcrypt.compareSync(password, foundUser.password)) {
							done(null, false, { message: 'Incorrect password' })
							return
						}

						done(null, foundUser)
					})
					.catch(err => done(err))
			}
		)
	)

	app.use(passport.initialize())
	app.use(passport.session())
}
