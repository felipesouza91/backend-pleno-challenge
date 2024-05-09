import { UserModel } from '../../../infra/database/conecction';
import { User } from "../../models/user";
import { UpdateRepositoryData, UserRepository, UserRepositoryData } from "../user-repository";

export class UserRespositoryImpl implements UserRepository {

  private connection

  constructor() {
    this.connection = UserModel;
  }
  async delete(id: string): Promise<void> {
    const result = await this.connection.destroy({
      where: {
        id
      }
    })
    if (result === 0) {
      throw new Error("Error during update")
    }
    return Promise.resolve()
  }


  async update(id: string, {name,password}: UpdateRepositoryData): Promise<void> {
    const [result] = await this.connection.update({ name, password }, { 
      where: {
       id
     }
    })
    if (result === 0) {
      throw new Error("Error during update")
    }
    return Promise.resolve()
  }
  
  async save({name,password,username}: UserRepositoryData): Promise<User> {
    const newUser = await this.connection.create({name,password,username})
    return  {
      id: newUser.dataValues.id,
      name: newUser.dataValues.name,
      username: newUser.dataValues.username,
      createdAt: newUser.dataValues.createdAt,
      password: newUser.dataValues.password
    }
  }


  async findAll(): Promise<User[]> {
    const result = await this.connection.findAll()
    return result.map(user => ({
      id: user.dataValues.id,
      name: user.dataValues.name,
      username: user.dataValues.username,
      createdAt: user.dataValues.createdAt,
      password: user.dataValues.password
    }))
  }
  
  async findById(id: string): Promise<User | null > {
    const result = await this.connection.findOne({
      where: {
        id
      }
    })
    return result === null ? null : {
      id: result.dataValues.id,
      name: result.dataValues.name,
      username: result.dataValues.username,
      createdAt: result.dataValues.createdAt,
      password: result.dataValues.password
    }
  }
  
  async findByUsername(username: string): Promise<User | null > {
    const result = await this.connection.findOne({
      where: {
        username
      }
    })
    return result === null ? null : {
      id: result.dataValues.id,
      name: result.dataValues.name,
      username: result.dataValues.username,
      createdAt: result.dataValues.createdAt,
      password: result.dataValues.password
    }
  }
}