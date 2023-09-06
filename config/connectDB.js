const {connect} = require('mongoose') 
const path = require('path')
const configPath = path.join(__dirname, '..' , '.env')
require('dotenv').config({path:configPath})

const { DB_HOST, PORT = 5000} = process.env;
console.log('DB_HOST',DB_HOST)

const connectDB = async () => {
    try {
      const db =   await connect(DB_HOST)
      console.log(`database is connected: NAME ${db.connect.name}  PORT ${PORT}`)
    }
    catch (error) {
        console.log(error, error.message)
        process.exit(1)
    }
} 
module.exports=  connectDB