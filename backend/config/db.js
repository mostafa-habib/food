import mongoose from "mongoose";
import mongoose from "mongoose";
require('dotenv').config();
const mongoUrl = process.env.MONGODB_URI;


export const connectDB = async () => {
    await mongoose.connect(mongoUrl).then(() => {
        console.log("DB Connected")
    })
}
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mostafahabib866:Fatma_1700557@cluster0.bet8k.mongodb.net/food').then(() => {
        console.log("DB Connected")
    })
}
