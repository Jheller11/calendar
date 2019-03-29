const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.render('calendar/index')
})

module.exports = router
