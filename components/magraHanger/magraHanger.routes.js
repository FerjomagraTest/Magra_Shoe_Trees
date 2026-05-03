const router = require('express').Router()
const magraHangerController = require('./magraHanger.controllers')


router.get('/MagraHanger', magraHangerController.baseRoute)

module.exports = router;