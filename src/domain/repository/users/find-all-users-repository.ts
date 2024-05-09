import { User } from "../../models/user";

export interface FindAllUsersRepo {
  execute(): Promise<User>
}