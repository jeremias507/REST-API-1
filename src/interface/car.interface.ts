import mongoose from "mongoose";

export interface Car {
  name:string;
  color: string;
  gas: "gasoline" | "electric";
  year: number;
  description: string;
  price: number;
 
} 

export interface CarModel extends Car, Document {
  createdBy: mongoose.Schema.Types.ObjectId;
}