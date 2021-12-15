
# Ztar-Assignment

## Start

### Requirements
Node.js
Express
npm
MongoDB account
Mongoose
Postman
Nodemon

### Runs
To initialize: 

    npm install
To Run:
   

     npm start

## Create .env

Create a .env file similar .env_sample.

Please, contact owner for any issues.

## Endpoints
1. Create a shipment:

- **Request Endpoint:** /userAccount/createShipment

- **Method/HTTP Verb:** POST.

- **Request Content-Type:** JSON.

- **Request body for FedEx:** 

   

     {"ID" : "FedEx",
    
    "Shipment": {
    
    "carrierServiceID": "fedexAIR",
    
    "package": {
    
    "dimenstionsUnit": "cm",
    
    "widthCM":5 ,
    
    "heightCM":5 ,
    
    "lengthCM": 5,
    
    "weightUnit": "g",
    
    "weightGram":5
    
    }}
    
    }
- **Request body for UPS:** 

    {"ID" : "UPS",
    
    "Shipment": {
    
    "shipmentServiceID": "UPSExpress",
    
    "package": {
    
    "dimenstionsUnit":"in",
    
    "widthIN":5,
    
    "heightIN":5 ,
    
    "lengthIN": 5,
    
    "weightUnit":"lbs",
    
    "weightPound":"5"
    
    }}
    
    }


**NOTE.**  The above 2 JSON(s) are the success cases. 

#### Authors
Caroline
