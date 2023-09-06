const {connect} = require('mongoose') 

const connectDB = async () => {
    try {
      const db =   await connect(process.env.DB_HOST)
      console.log(`database is connected: NAME ${db.connect.name} HOST ${db.connect.host} PORT ${db.connect.port}`)
    }
    catch (error) {
        console.log(error, error.message)
        process.exit(1)
    }
} 