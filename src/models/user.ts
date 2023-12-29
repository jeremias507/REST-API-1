import mongoose from "mongoose";
 import { User } from "../interface/user.interface";
const userModel = new mongoose.Schema<User>({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
},{ timestamps: true, versionKey: false })

export default mongoose.model("users",userModel)