import express from "express";
import { login, signUp } from "../controllers/authenController.js";


const authRoute = express.Router();

authRoute.post("/login",login);
authRoute.post("/signup", signUp)



export default  authRoute;