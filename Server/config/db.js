const mongoose = require('mongoose')

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI)

    if (connection) console.log('Database Connected');
    else console.log('Database Connection error');
}


module.exports = connectDB