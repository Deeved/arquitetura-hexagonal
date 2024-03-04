import User from "../../domain/user/user";
import { UserRepositoryPort } from "../../domain/user/user-repository-port";

export interface Output {
  success?: boolean;
  message: string;
}

export default class RegisterUser {
  constructor(private readonly repository: UserRepositoryPort) {}

  execute(newUser: User): Output {
    const existUser = this.repository.findByEmail(newUser.email);

    if (existUser) {
      return { success: false, message: "User already exists" };
    }

    this.repository.save(newUser);
    return { success: true, message: "User registered successfully!" };
  }
}
