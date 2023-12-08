import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });

connectDB();

/*import express from "express";
import connectDB from './db/index';
import { dotenv } from 'dotenv';

const app = express();

async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error(error);
      throw error;
    });
  } catch (error) {
    console.log(error);
  }
};*/
