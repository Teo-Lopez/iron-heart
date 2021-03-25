module.exports = app => {
	app.use('/', require('./base.routes'))
	app.use('/auth', require('./auth.routes'))
	app.use('/symptoms', require('./symptoms.routes'))
	app.use('/diagnostic', require('./diagnostic.routes'))
	app.use('/profile', require('./profile.routes'))
	app.use('/api', require('./api/locations.routes'))
	app.use('/api', require('./api/expanded-symptoms.routes'))
	app.use('/basicmap', require('./basic-map.routes'))
}
