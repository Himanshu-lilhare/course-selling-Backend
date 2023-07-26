import app from "./App.js";
import { dbconnect } from "./config/dbconnect.js";
import cloudinary from "cloudinary"


import Razorpay from "razorpay"
import nodeCrone from "node-cron"
import { statsModel } from "./models/dashboardStats.js";

dbconnect()
  cloudinary.v2.config({
    cloud_name:process.env. CLOUDINARY_CLIENT_NAME ,
    api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APISECRET
  })
 export const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_APIKEY,
    key_secret: process.env.RAZOR_PAY_SECRET_KEY,
  });


   


app.listen(process.env.PORT,()=>{
    console.log("server is running on port"+process.env.PORT)
})