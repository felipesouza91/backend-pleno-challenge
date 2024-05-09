import express from 'express';
import { userRouter } from './routes/user.router';

const api = express();


api.use("/api/users", userRouter)



export { api };
