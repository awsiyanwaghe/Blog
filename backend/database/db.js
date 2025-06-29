import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://agent99shorts:awsi93300@cluster0.ejce2ma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("MongoDB connection error", error);
        
    }
}

export default connectDB;