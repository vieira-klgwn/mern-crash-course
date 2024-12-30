import mongoose from "mongoose";




export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB COnnected: ${conn.connection.host}`);
    }catch (error) {
        process.exit(1) // process(1) code means exit with failure and process(0) means succes
    }
}