import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    //If its 
    if(connection.isConnected){
        console.log("Database already connected!!")
        return;
    }

}