const Item = require('../models/item')

const utils = {
  // check for logged in user
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.render('users/login', {
      message: 'You must be logged in to view this page.'
    })
  },
  // check that current user is post author for editing/deleting rights
  isAuthor: (req, res, next) => {
    Item.findOne({ _id: req.params.id }).then(item => {
      if (req.user && req.user.id === item.createdBy.id) {
        return next()
      } else {
        res.render(`/calendar/view`, {
          item: item,
          message:
            'You must be logged in as the creator of this post to edit or delete it.'
        })
      }
    })
  }
}

module.exports = utils
