import User from "../../domain/user/user";
import { UserRepositoryPort } from "../../domain/user/user-repository-port";
import { Client } from "pg";

export class UserRepositoryPostgres implements UserRepositoryPort {
  private config = {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "mypassword",
  };
  private client: Client;

  constructor() {
    this.client = new Client(this.config);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    try {
      await this.client.connect();

      const query = `SELECT * FROM users where email = '${email}'`;
      const result = await this.client.query(query);

      await this.client.end();
      return result.rows[0];
    } catch (error) {
      await this.client.end();
      throw new Error("Erro ao consultar usuário.");
    } finally {
      await this.client.end().then(() => console.log("cliente fechado"));
    }
  }

  async save(user: User): Promise<void> {
    try {
      await this.client.end();
      await this.client.connect().then(() => console.log("cliente aberto"));
      const query = {
        text: "INSERT INTO users(name, email) VALUES($1, $2)",
        values: [user.name, user.email],
      };

      await this.client.query(query);
      await this.client.end();
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao inserir usuário.");
    } finally {
      await this.client.end();
    }
  }
}
