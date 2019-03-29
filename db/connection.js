const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/calendar', { useNewUrlParser: true })

module.exports = mongoose
