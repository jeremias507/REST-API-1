import mongoose from "mongoose";
import { CarModel } from "../interface/car.interface";


const itemModel = new mongoose.Schema<CarModel>(
  {
    name: {
      type: String,
      required:true
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: { 
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,  
      ref: 'users',  
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("items", itemModel);
