const favicon = require('serve-favicon')
const hbs = require('hbs')
const path = require('path')
const express = require('express')

module.exports = app => {
	app.set('views', path.join(__dirname, '..', 'views'))
	app.set('view engine', 'hbs')
	app.use(express.static(path.join(__dirname, '..', 'public')))
	app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')))

	hbs.registerHelper('ifUndefined', (value, options) => {
		if (arguments.length < 2) throw new Error('Handlebars Helper ifUndefined needs 1 parameter')
		if (typeof value !== undefined) {
			return options.inverse(this)
		} else {
			return options.fn(this)
		}
	})
}
