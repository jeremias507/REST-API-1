import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(<string>process.env.MONGO, {
      writeConcern: { w: "majority", wtimeout: 0 },
    });
    console.log("Base de datos conectada!!!");
  } catch (error) {
    console.error("error al conectar la base de datos:", error);
  }
};
