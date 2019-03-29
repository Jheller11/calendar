const router = require('express').Router()
const passport = require('passport')
require('../config/passport')(passport)
const { isLoggedIn } = require('../config/utilities')

router.get('/login', (req, res) => {
  res.render('users/login', { message: req.flash('loginMessage') })
})

router.get('/signup', (req, res) => {
  res.render('users/signup', { message: req.flash('signupMessage') })
})

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('users/profile')
})

router.post(
  '/login',
  passport.authenticate('local-login', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true
  })
)

router.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup',
    failureFlash: true
  })
)

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
