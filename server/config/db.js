import mongoose from "mongoose";

// function to connect to the mongodb database
const connectDB = async () => {
    mongoose.connection.on('connected',() => console.log('Database Connected'))
 
    await mongoose.connect(`${process.env.MONGODB_URI}/pro-connect`)
}

export default connectDB;
