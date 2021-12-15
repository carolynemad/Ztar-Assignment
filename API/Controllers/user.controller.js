//Requires
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
//var authenticate = require('../authentication/verifyToken')


//Models Requires
const fedexModel = require('../../MODELS/FedEx_model')
const upsModel = require('../../MODELS/UPS_model')

//Authentication
//const { salt, secretOrKey } = require('../../CONFIG/keys')

//statusCode imports
const {
  successCode,
  unknown,
  shipmentAlreadyCreated
} = require('../Constants/errorCodes')
//Constant imports 
const { company } = require('../Constants/enum')


//Create a Shipment
const createShipment = async (req, res) => {
  if ((req.body.ID) === (company.FEDEX)) {
    try {
      const Shipment = req.body.Shipment
      // const ShipmentFound = await fedexModel.findOne({sort: Shipment.sort})

      // if (ShipmentFound) {
      //   return res.json({
      //     statusCode: shipmentAlreadyCreated.statusCode,
      //     error: shipmentAlreadyCreated.message
      //   })
      // }
      const shipmentCreated = await fedexModel.create(Shipment)
      console.log(shipmentCreated)
      return res.json({
        statusCode: successCode.statusCode,
        message: successCode.message
      })

    }
    catch (e) {
      console.log(e)
       
      res.json({
        statusCode: unknown.statusCode,
        message: e.message
      })
    }
  } else if ((req.body.ID) === (company.UPS)) {
    try {
      const Shipment = req.body.Shipment
      // const ShipmentFound = await upsModel.findOne({ index: Shipment.index })

      // if (ShipmentFound) {
      //   return res.json({
      //     statusCode: shipmentAlreadyCreated.statusCode,
      //     error: shipmentAlreadyCreated.message
      //   })
      // }
      const shipmentCreated = await upsModel.create(Shipment)
      console.log(shipmentCreated)
      return res.json({
        statusCode: successCode.statusCode,
        message: successCode.message
      })

    }
    catch (e) {
      console.log(e)
      res.json({
        statusCode: unknown.statusCode,
        message: e.message
      })
    }
  }
}


module.exports = {
  createShipment
}