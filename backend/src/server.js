const mongoose = require("mongoose");


const app = require("./app");
const path = require('path')
const configPath = path.join(__dirname, '..' , '.env')
require('dotenv').config({path:configPath})



const { DB_HOST, PORT = 5000} = process.env;
// console.log('DB_HOST',DB_HOST)


mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });


