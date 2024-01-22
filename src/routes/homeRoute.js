import express from "express";
import { getImgHome, getImgHomeByName } from "../controllers/homeController.js";



const homeRoute = express.Router();

homeRoute.get("/imgHome", getImgHome)
homeRoute.get("/imgHomeByName",getImgHomeByName)




export default homeRoute;