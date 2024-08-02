const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {  
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database Connection Successful");
    })
    .catch((err) => {
      console.log("Error in connecting to the Database");
      console.error(err); // Using console.error for error logging
      process.exit(1);
    });
};
