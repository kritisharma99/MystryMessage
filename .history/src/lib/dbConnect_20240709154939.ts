import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    //Check If its already connected
    if(connection.isConnected){
        console.log("Database already connected!!")
        return;
        }
        try{
            await mongoose.connect(process.env.MONGODB_URI || "")
        }
        catch(error){
            console.log(error, "DB Connection Error")
        }
}