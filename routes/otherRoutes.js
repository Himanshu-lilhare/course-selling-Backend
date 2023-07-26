import express from "express"
import { contact, getstats, requestcourse } from "../controllers/otherRoutesController.js"
import { adminORuser, getaccessafterlogin, isTestAdmin } from "../middlewares/findWhichUserLogin.js"

const otherroute=express.Router()

otherroute.route("/contact").post(contact)
otherroute.route("/requestcourse").post(requestcourse)


// route fro stats of dashboard

otherroute.route("/getstats").get(getaccessafterlogin,isTestAdmin,getstats)
export default otherroute
