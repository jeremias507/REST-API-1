import mongoose from "mongoose";
import { Storage } from "../interface/storage";

const StorageSchema = new mongoose.Schema<Storage>(
  {
    fileName: {
      type: String,
    },
    idUser: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("storage",StorageSchema)