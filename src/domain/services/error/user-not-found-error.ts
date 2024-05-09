export class UserNotFoundError extends Error {

  constructor(message: String) {
    super("User not found");
  }
}