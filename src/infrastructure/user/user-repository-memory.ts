import User from "../../domain/user/user";
import { UserRepositoryPort } from "../../domain/user/user-repository-port";

export default class UserRepositoryMemory implements UserRepositoryPort {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.users.find((user) => user.email === email);
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
    console.log(
      `Usuário ${user.name} (${user.email}) salvo no banco de dados.`
    );
  }
}
