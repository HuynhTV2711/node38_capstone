import express from "express";
import { userController } from "../controllers/userController.js";


const userRoute = express.Router();

userRoute.put("/edit-user/:userId", userController)



export default  userRoute;
    