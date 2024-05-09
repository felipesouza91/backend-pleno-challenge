import { User } from "../../models/user";

export interface FindAllUsers {
  execute(): Promise<User>
}