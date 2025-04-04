const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config(); 

const url = process.env.MONGODB_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB!", error);
  });

module.exports = mongoose; // Export mongoose
