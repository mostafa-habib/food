import mongoose from "mongoose";
require('dotenv').config();
const mongoUrl = process.env.MONGODB_URI;


export const connectDB = async () => {
    await mongoose.connect(mongoUrl).then(() => {
        console.log("DB Connected")
    })
}
