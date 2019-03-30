const router = require('express').Router()
const Item = require('../models/Item.js')
const User = require('../models/User')
const { isLoggedIn, isAuthor } = require('../config/utilities')

// new item form
router.get('/new', isLoggedIn, (req, res, next) => {
  res.render('calendar/new')
})

// edit item form
router.get('/edit/:id', isAuthor, (req, res, next) => {
  Item.findOne({ _id: req.params.id })
    .then(item => res.render('calendar/edit', { item: item }))
    .catch(err => next(err))
})

// update item put request
router.put('/edit/:id', isAuthor, (req, res, next) => {
  Item.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(item => res.redirect('/calendar'))
    .catch(err => next(err))
})

// delete item by id
router.delete('/:id', isAuthor, (req, res, next) => {
  Item.findOneAndDelete({ _id: req.params.id })
    .then(() => res.redirect('/calendar'))
    .catch(err => next(err))
})

// index
router.get('/', isLoggedIn, (req, res, next) => {
  Item.find({ 'createdBy.id': req.user.id })
    .then(items => res.render('calendar/index', { items: items }))
    .catch(err => next(err))
})

// post new
router.post('/', isLoggedIn, (req, res, next) => {
  Item.create({
    // finish after confirming schema
  })
    .then(() => res.redirect('/calendar'))
    .catch(err => next(err))
})
module.exports = router
