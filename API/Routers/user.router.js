const express = require('express')
//const { verifyToken } = require('../authentication/verifyToken')
const router = express.Router()

//Controllers
const {createShipment} = require('../Controllers/user.controller')

//Validations
const {validateCreateShipment} = require('../Validations/user.validation');

//Routings
router.post('/createShipment', createShipment , validateCreateShipment)

module.exports = router