import { Router } from "express";
import { createUser, login, sendEmail, forgotPassword } from "./user.controller.js";

const userRouter = Router();

// @POST /api/user/signup
userRouter.post('/signup', createUser);

// @POST /api/user/login
userRouter.post('/login', login);

// @POST /api/user/send-mail
userRouter.post('/send-mail', sendEmail);

// @POST /api/user/forgot-password
userRouter.post('/forgot-password', forgotPassword);

export default userRouter;