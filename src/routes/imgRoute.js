import express from "express";
import { getImg } from "../controllers/imgController.js";


const imgRoute = express.Router();

imgRoute.get("/get-img", getImg);



export default  imgRoute;
    