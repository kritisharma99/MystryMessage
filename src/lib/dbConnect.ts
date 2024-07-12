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
            const db = await mongoose.connect(process.env.MONGODB_URI || "", {})
            connection.isConnected = db.connections[0].readyState;

            console.log("DB connected Successfully!!!")
        }
        catch(error){
            console.log(error, "DB Connection Error");
            process.exit();
        }
}

export default dbConnect;