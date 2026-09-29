import { Router } from "express";
import { createUser, login } from "./user.controller.js";

const userRouter = Router();

// @POST /api/user/signup
userRouter.post('/signup', createUser);

// @POST /api/user/login
userRouter.post('/login', login);

export default userRouter;