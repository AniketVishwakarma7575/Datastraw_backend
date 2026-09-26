import mongoose from "mongoose";

const connectDb = async ()=> {
    try{
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not set. Add it to backend/.env.");
        }

        const connection = await mongoose.connect(mongoUri);

        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error){
        console.error(`MongoDB connection failed: ${error.message}`);
        process.exit(1);
    }
};


export default connectDb;