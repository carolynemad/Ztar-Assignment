//1-mongoose
//2-schema
//3-export model 

//const { strict } = require("assert")
//const { Double } = require("mongodb")
const mongoose = require("mongoose")


let UPSSchema = new mongoose.Schema({
    shipmentServiceID: {
        type: String,
        required: [true, 'Service ID field is required.'],
        enum: {
            values: ["UPSExpress", "UPS2DAY"],
            message: '{VALUE} is not supported'
        }
    },
    package: {
        dimenstionsUnit:
        {
            type: String,
            required: [true, 'Dimenstions Unit field is required.'],
            enum: {
                values: ['in'],
                message: '{VALUE} is not supported'
            }
        },
        widthIN:
        {
            type: [Number, 'Expected a number, got{VALUE}'],
            required: [true, 'Width field is required.'],
            min: [0.00001, 'Must be a number more than Zero, got {VALUE}']
        },

        heightIN:
        {
            type: [Number, 'Expected a number, got{VALUE}'],
            required: [true, 'Height field is required.'],
            min: [0.00001, 'Must be a number more than Zero, got {VALUE}']
        },

        lengthIN:
        {
            type: [Number, 'Expected a number, got{VALUE}'],
            required: [true, 'Length field is required.'],
            min: [0.00001, 'Must be a number more than Zero, got {VALUE}']
        },
        weightUnit:
        {
            type: String,
            required: [true, 'Weight Unit field is required.'],
            enum: {
                values: ['lbs'],
                message: '{VALUE} is not supported'
            }
        },

        weightPound:
        {
            type: [Number, 'Expected a number, got{VALUE}'],
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


module.exports = mongoose.model("UPS", UPSSchema)