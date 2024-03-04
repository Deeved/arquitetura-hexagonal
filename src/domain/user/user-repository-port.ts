import User from "./user";

export interface UserRepositoryPort {
  findByEmail(email: string): User | undefined;
  save(user: User): void;
}
