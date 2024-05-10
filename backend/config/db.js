import mongoose from "mongoose";


const connectDb = async (MONGODB_URI) => {
    try {
        const DB_OPTIONS = {
            dbName : 'MA_DB'
        }
        await mongoose.connect(MONGODB_URI, DB_OPTIONS);
        console.log(`Connected to Mongo DB ${DB_OPTIONS.dbName}`);
    }catch (e) {
        console.error(`Error connecting to database: ${e}`);
    }
}

export default connectDb;