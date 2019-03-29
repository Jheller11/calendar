const mongoose = require('../db/connection')

const itemSchema = new mongoose.Schema({
  // build out schema
  created: {
    type: Date,
    default: Date.now()
  },
  title: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date
  },
  length: {
    // in hours
    type: Number,
    default: 0
  },
  url: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  recurring: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Item', itemSchema)
