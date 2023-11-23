import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongooDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("server is runnning on port 3000");
});

app.use("/api/user" , userRouter);
app.use("/api/auth" , authRouter);
app.use("/api/listing" , listingRouter);

app.use((err, req , res , next ) => {
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "internal server eror!!";
    return res.status(statusCode).json({
        succes : false ,
        statusCode,
        message
    });
});
