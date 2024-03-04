import User from "../../domain/user/user";
import { UserRepositoryPort } from "../../domain/user/user-repository-port";

export default class UserRepositoryMemory implements UserRepositoryPort {
  private users: User[] = [];

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  save(user: User): void {
    this.users.push(user);
    console.log(
      `Usuário ${user.name} (${user.email}) salvo no banco de dados.`
    );
  }
}
