import mongoose from "mongoose";


export default async function  createConnection(){
    try {
        await mongoose.connect('mongodb://tenate:dEEzzP3Plh8E9X7M@ac-tkigxzf-shard-00-00.gdbggdp.mongodb.net:27017,ac-tkigxzf-shard-00-01.gdbggdp.mongodb.net:27017,ac-tkigxzf-shard-00-02.gdbggdp.mongodb.net:27017/?ssl=true&replicaSet=atlas-mr0lbp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
        console.log('connected')
    } catch (error) {
        console.log('error occurs')
    }
}