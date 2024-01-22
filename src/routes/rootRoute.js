import express from "express";
import imgRoute from "./imgRoute.js";
import authRoute from "./authRoute.js";
import commentRoute from "./commentRoute.js";
import userRoute from "./userRoute.js";
import homeRoute from "./homeRoute.js";
import imgManageRoute from "./imgManageRoute.js";



const rootRoute = express.Router();

rootRoute.use("/img", imgRoute);
rootRoute.use("/comment", commentRoute);
rootRoute.use("/auth", authRoute);
rootRoute.use("/user", userRoute);
rootRoute.use("/home", homeRoute);
rootRoute.use("/imgManage", imgManageRoute);




export default rootRoute;