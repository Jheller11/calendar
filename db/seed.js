const Item = require('../models/Item')
const seeds = require('./seeds.json')
const mongoose = require('./connection')

Item.deleteMany({})
  .then(Item.insertMany(seeds))
  .then(() => {
    mongoose.connection.close()
    console.log(`Successfully added ${seeds.length} items.`)
  })
  .catch(err => console.log(err))
