require('dotenv').config()

const express = require('express')
const app = express()

require('./configs/locals.config')
require('./configs/db.config')
require('./configs/cors.config')(app)
require('./configs/preprocessor.config')(app)
require('./configs/engine.config')(app)
require('./configs/session.config')(app)
require('./configs/errorHandling.config')(app)
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)

require('./routes')(app)

module.exports = app
