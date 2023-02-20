const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
let api = process.env.API;

const ConnecTomongo = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(api)
    .then(() => {
      console.log("Connection Successful");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = ConnecTomongo;
