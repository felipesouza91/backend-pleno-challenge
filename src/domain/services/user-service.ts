
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
  createdAt: Date
}

export interface UserService {

  findAll(): Promise<UserDTO[]>

  findById(id: string): Promise<UserDTO>

  save(data: CreateUserInput): Promise<UserDTO>

  update(id: string, data: UpdateUserInput): Promise<void>

  delete(id: string): Promise<void>
  
}