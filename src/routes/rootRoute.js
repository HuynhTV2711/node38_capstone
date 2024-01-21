import express from "express";
import imgRoute from "./imgRoute.js";
import authRoute from "./authRoute.js";
import commentRoute from "./commentRoute.js";
import userRoute from "./userRoute.js";



const rootRoute = express.Router();

rootRoute.use("/img", imgRoute);
rootRoute.use("/comment", commentRoute);
rootRoute.use("/auth", authRoute);
rootRoute.use("/user", userRoute)



export default rootRoute;