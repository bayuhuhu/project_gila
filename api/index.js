import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=> {
    console.log("connected to mongooDB");
})
.catch((err) => {
    console.log(err);
});
const app = express();

app.listen(3000, () => {
    console.log('server is runnning on port 3000');
})