import { User } from "../models/user";

export type UserRepositoryData = { 
  name: string;
  username: string;
  password: string;
}

export type UpdateRepositoryData = {
  name: string;
  password: string;
}

export interface UserRepository {


  findAll(): Promise<User[]>

  findById(id: string): Promise<User | null >

  save(data: UserRepositoryData): Promise<User>

  findByUsername(username: string): Promise<User | null >

  update(id: string, data: UpdateRepositoryData): Promise<void>

  delete(id: string): Promise<void>
}