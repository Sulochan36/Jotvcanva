import mongoose, { Error } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local");
}

export async function connectDB(): Promise<mongoose.Connection> {

    if (!MONGODB_URI) {
        throw new Error('MongoDB URI is required');
    }

    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return mongoose.connection;
    } catch (error: unknown) {
        console.error('MongoDB connection failed:', (error as Error).message);
        throw error;
    }

}