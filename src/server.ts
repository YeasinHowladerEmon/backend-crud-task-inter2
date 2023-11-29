import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import config from "./config";
let server: Server;

async function serverOn() {
  try {
    await mongoose.connect(config.database_url as string);
    server = app.listen(5000, () => {
      console.log(`Application listening at http://localhost:5000`);
    });
  } catch (error) {
    console.log(`failed to connect database`, error);
  }
}
serverOn();
