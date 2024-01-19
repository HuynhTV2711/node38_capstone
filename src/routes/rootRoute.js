import express from "express";
import imgRoute from "./imgRoute.js";
import authRoute from "./authRoute.js";



const rootRoute = express.Router();

rootRoute.use("/img", imgRoute);
rootRoute.use("/auth", authRoute)



export default rootRoute;