import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import { UserExistsError } from './domain/services/error/user-exists-error';
import { UserNotFoundError } from './domain/services/error/user-not-found-error';
import { userRouter } from './routes/user.router';
const api = express();

api.use(express.json())
api.use("/api/users", userRouter)

api.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error)
  if (error instanceof UserNotFoundError || error instanceof UserExistsError) {
    return res.status(404).json({ message: error.message})
  }
  return res.status(500).json({ message: "Internal server error, try again later"})
})

export { api };
