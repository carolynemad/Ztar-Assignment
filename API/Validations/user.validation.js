
const validateCreateShipment = (req, res, next) => {
console.log("HEREE!!")
  let error = req.body.validateSync();
  console.log(error)
  if(error){
    return res.json({
      statusCode: validationError,
      error: error
    })

  }
  return next()
}


module.exports = {
  validateCreateShipment,
}