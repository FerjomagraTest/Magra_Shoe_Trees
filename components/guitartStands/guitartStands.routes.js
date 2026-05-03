const router = require('express').Router()
const guitartStandsController = require('./guitartStands.controllers')


router.get('/GuiTartStands', guitartStandsController.baseRoute)

module.exports = router;