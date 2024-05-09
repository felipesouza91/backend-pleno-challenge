import { UserRepository } from "../../repository/user-repository";
import { UserExistsError } from "../error/user-exists-error";
import { UserNotFoundError } from "../error/user-not-found-error";
import { CreateUserInput, UpdateUserInput, UserDTO, UserService } from "../user-service";

export class UserServiceImpl implements UserService {

  constructor(private userRepository: UserRepository) {}


  async findAll(): Promise<UserDTO[]> {
    const result = await this.userRepository.findAll();
    return result.map(user => ({
      createdAt: user.createdAt,
      username: user.username,
      id: user.id,
      name: user.name
    }))
  }

  async findById(id: string): Promise<UserDTO> {
    const result = await this.userRepository.findById(id);
    if (result === null) {
      throw new UserNotFoundError('User not found')
    }
    return result;
  }

  async save({ name, password, username }: CreateUserInput): Promise<UserDTO> {
    const userExists = await this.userRepository.findByUsername(username);
    if (userExists) {
      throw new UserExistsError("Username already exists")
    } 
    const { id, createdAt } = await this.userRepository.save({
      name,username,password
    })
    return {id,createdAt,name,username};
  }

  async update(id: string, {name,password}: UpdateUserInput): Promise<void> {
    const userExists = await this.userRepository.findById(id);
    if (userExists === null ) {
      throw new UserNotFoundError("User not exits")
    } 
    await this.userRepository.update(id, { name, password })
    return Promise.resolve()
  }

  async delete(id: string): Promise<void> {
    const userExists = await this.userRepository.findById(id);
    if (userExists === null ) {
      throw new UserNotFoundError("User not exits")
    }
    await this.userRepository.delete(id)
    return Promise.resolve()
  } 



  
}