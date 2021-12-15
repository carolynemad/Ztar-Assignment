//1-mongoose
//2-schema
//3-export model 
const mongoose = require("mongoose")


let FedExSchema = new mongoose.Schema({
    carrierServiceID:
    {
        type: String,
        required: [true, 'Service ID field is required.'],
        enum: {
            values: ["fedexAIR", "fedexGroud"],
            message: '{VALUE} is not supported'
          }
    },
    package: {
        dimenstionsUnit: {
            type: String,
            required: [true, 'Dimenstions Unit field is required.'],
            enum: {
                values: ['cm'],
                message: '{VALUE} is not supported'
            }
        },
        widthCM:
        {
            type: [Number,'Expected a number, got{VALUE}'],
            required: [true, 'Width field is required.'],
            min: [0.00001, 'Must be a number more than Zero, got {VALUE}']
        },
        heightCM:
        {
            type: [Number,'Expected a number, got{VALUE}'],
            required: [true, 'Height field is required.'],
            min: [0.00001, 'Must be a number more than Zero, got {VALUE}']
        },
        lengthCM:
        {
            type: [Number,'Expected a number, got{VALUE}'],
            required: [true, 'Length field is required.'],
            min: [0.00001, 'Must be a number more than Zero, got {VALUE}']
        },
        weightUnit:
        {
            type: [Number,'Expected a number, got{VALUE}'],
            required: [true, 'Weight Unit field is required.'],
            enum: {
                values: ["g"],
                message: '{VALUE} is not supported'
            }
        },
        weightGram:
        {
            type: [Number,'Expected a number, got{VALUE}'],
            required: [true, 'Weight field is required.'],
            min: [0.00001, 'Must be a number more than Zero, got {VALUE}']
        },
    }
},
    {
        strict: false,
        timestamps: true,
        bufferCommands: false
    })
module.exports = mongoose.model("FedEx", FedExSchema)