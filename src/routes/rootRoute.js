import express from "express";
import imgRoute from "./imgRoute.js";



const rootRoute = express.Router();

rootRoute.use("/img", imgRoute);



export default rootRoute;