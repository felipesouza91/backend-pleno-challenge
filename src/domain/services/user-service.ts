import { User } from "../models/user"

export type CreateUserInput = {
  name: string
  username: string
  password: string
}

export type UpdateUserInput = {
  name: string
  password: string
}

export type UserDTO = {
  id: string;
  username: string;
  name: string
  createdAt: string
}

export interface UserService {

  findAll(): Promise<UserDTO[]>

  findById(id: string): Promise<UserDTO>

  save(data: CreateUserInput): Promise<User>

  update(id: string, data: UpdateUserInput): Promise<UserDTO>

  delete(id: string): Promise<void>
  
}