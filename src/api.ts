import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import { UserNotFoundError } from './domain/services/error/user-not-found-error';
import { userRouter } from './routes/user.router';
const api = express();

api.use(express.json())
api.use("/api/users", userRouter)

api.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof UserNotFoundError) {
    return res.status(404).json({ message: error.message})
  }
})

export { api };
