import mongoose from "mongoose";

const MONGO_DB_URL = 'mongodb://localhost:27017/my-chat-app';
const connectToMongoDB = async function(){
    try{
        await mongoose.connect(MONGO_DB_URL);
        console.log("Connected to mongo");
    }catch(error){
        console.log("Error connecting " + error);
    }
}

export default connectToMongoDB;