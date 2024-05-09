import { Request, Response, request } from "express";
import { UserService } from "../domain/services/user-service";

export class UserController  {

  constructor(private userService: UserService) {}

  async  getAll(request: Request, response: Response) {
    const users = await this.userService.findAll()
    return response.json(users);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params 
    if (!id) {
      return response.status(400).json({message: "Id must be provided"})
    }
    const user = await this.userService.findById(id);
   
    const {createdAt,name,username } = user;
    return response.status(200).json({
      createdAt,id,name,username
    })  
  }

  async save(request: Request, response: Response) {
    const { username, name, password, confirmationPassword } = request.body;
    await this.userService.save({
      username, name, password
    })
    return response.status(201).end();
  }

  async update(reques: Request, response: Response) {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({message: "Id must be provided"})
    }
    const { name, password, confimationPassword } = reques.body;
    await this.userService.update(id, { name, password })
    return response.status(200).end();
  }

  async delete(reques: Request, response: Response) {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({message: "Id must be provided"})
    }
    await this.userService.delete(id);
    return response.status(204).end()
  }

}