import express from 'express';
import { UserController } from '../controllers/user-controller';
import { UserRespositoryImpl } from './../domain/repository/impl/user-repository-impl';
import { UserServiceImpl } from './../domain/services/impl/user-service-impl';

const userRouter = express.Router()

const userRepository = new UserRespositoryImpl()

const userService = new UserServiceImpl(userRepository)

const userController = new UserController(userService)



userRouter.get("", (req, res) => {
  return userController.getAll(req,res)
})

userRouter.get("/:id", (req, res) => {
  return userController.getById(req,res)
})


userRouter.post("", (req, res) => {
  return userController.save(req,res)
})



export { userRouter };

