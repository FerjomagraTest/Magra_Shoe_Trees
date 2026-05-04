require('dotenv').config();

const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
//const flash = require('connect-flash')
const passport = require('passport')
//const session = require('express-session')
const bodyParser = require('body-parser')
//const { error404, error500 } = require('./middleware/errors');


//db
//require('./components/login/tools/passport')(passport)
//require('./components/signUp/tools/passport')(passport)

//Router
app.use(morgan('dev'))

//Body objects
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({parameterLimit: 100000, limit: '20mb', extended: true }))

//Passport
/*app.use(session({
    secret: 'dintair',
    resave: false,
    saveUninitialized: false
  }));*/
  
//app.use(flash())
//app.use(passport.initialize())
//app.use(passport.session())



//view engine setup
app.set('views', path.join(__dirname, 'frontend'))
app.set('view engine', 'jade')



//views  routes
//index

var indexRouter = require('./components/indexPage/indexPage.routes.js')
var magraHanger = require('./components/magraHanger/magraHanger.routes.js')
var guitartStands = require('./components/guitartStands/guitartStands.routes.js')


app.use('/',
  indexRouter,
  magraHanger,
  guitartStands
)
//login


//static files
app.use(express.static(path.join(__dirname, 'public')))


//Errors
//app.use(error404)
//app.use(error500)

module.exports = app