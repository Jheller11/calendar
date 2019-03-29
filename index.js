const express = require('express')
const app = express()
const override = require('method-override')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const flash = require('connect-flash')
const helmet = require('helmet')
const session = require('express-session')
const compression = require('compression')
const path = require('path')
const favicon = require('serve-favicon')

// config app
app.use(bodyParser.urlencoded({ extended: true }))
app.use(override('_method'))
app.use(cookieParser())
app.use(compression())
app.use(helmet())
app.use(express.static('public'))
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

// import controllers
const userController = require('./controllers/users')

// passport
app.use(session({ secret: 'secrets', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// view engine
app.set('views', './views')
app.set('view engine', 'pug')

// pass title and user to all views
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.title = 'Calendar App'
  next()
})

// set controllers
app.use('/users', userController)

// set home route/404
app.get('/', (req, res, next) => {
  res.render('home')
  next()
})

// error handler

// set port
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () =>
  console.log('server running on ' + app.get('port'))
)
