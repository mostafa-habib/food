import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mostafahabib866:Fatma_1700557@cluster0.bet8k.mongodb.net/food').then(() => {
        console.log("DB Connected")
    })
}