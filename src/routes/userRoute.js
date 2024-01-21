import express from "express";
import { userController } from "../controllers/userController.js";
import { khoaApi } from "../config/jwt.js";


const userRoute = express.Router();

userRoute.put("/edit-user/:userId", khoaApi ,userController)



export default  userRoute;
    