
//success codes
const successCode = {
  statusCode: 0,
  message: 'Successful!'
}

//error code
const unknown = {
  statusCode: 900,
  message : 'Unknown Error'
}
const validationError = {
  statusCode: 901,
  message: 'Invalid Params'
}
const routingError = {
  statusCode : 902,
  message : 'Route Not Found'
}

//Upon-creation error
const shipmentAlreadyCreated = {
  statusCode : 800,
  message : 'This Shipment has already been created'
}
module.exports = {
  successCode, //Used
  validationError,
  unknown, //Used
  routingError,
  shipmentAlreadyCreated, //Used
}
