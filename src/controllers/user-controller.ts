import { Request, Response } from "express";
import { UserRepository } from "../domain/repository/user-repository";

export class UserController  {

  constructor(private userRepository: UserRepository) {}


  async  getAll(request: Request, response: Response) {
    const users = await this.userRepository.findAll()
    return response.json(users);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params 
    if (!id) {
      return response.status(400).json({message: "Id must be provided"})
    }
    const user = await this.userRepository.findById(id);
    if (!user) {
      return response.status(404).json({message: "User not found"})
    }
    const {createdAt,name,username } = user;
    return response.status(200).json({
      createdAt,id,name,username
    })
  }



}