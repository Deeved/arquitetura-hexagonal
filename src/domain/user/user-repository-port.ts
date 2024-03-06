import User from "./user";

export interface UserRepositoryPort {
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
}
