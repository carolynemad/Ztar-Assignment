
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const connectDB = async function () {
  const uri = "mongodb+srv://caa:demodemo10@cluster0.jpto7.mongodb.net/Ztar?retryWrites=true&w=majority";
  await mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch((err) => console.log(err))

  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   //client.close();
  // });
}

module.exports = { connectDB }