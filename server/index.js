require('dotenv').config()


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const startWebServer = () => {

  // app.use(express.static('public'))
  app.use(bodyParser.json());

  const port = process.env.DB_PORT || 3001;
    app.listen(port, () => {
      console.log(`Listening on port:${port}`);
  });
}

const path = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds115154.mlab.com:15154/nuclear-decay-table`
mongoose.connect(path, {useNewUrlParser: true}).then(
  () => { 
    console.log("mongoose connected successfully");
   
    startWebServer();
  },
  err => {
    console.log("mongoose did not connect",err);
   }
);

