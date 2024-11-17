import mongoose from "mongoose";
const lineSchema= new mongoose.Schema({
    lineName:{
        type:String,
        default:""
    },
    district:{
        type:String,
        default:""
    }
})
const line= mongoose.model("line",lineSchema)
export default line