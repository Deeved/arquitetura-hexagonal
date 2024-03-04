import RegisterUser from "./src/application/user/register";
import User from "./src/domain/user/user";
import UserRepositoryMemory from "./src/infrastructure/user/user-repository-memory";

const userRepositoryMemory = new UserRepositoryMemory();
const register = new RegisterUser(userRepositoryMemory);

const newUser: User = {
  name: "Deeved Hiuston",
  email: "deeved@gmail.com",
};

const result = register.execute(newUser);

if (result.success) {
  console.log(result.message);
} else {
  console.error(`Erro ao registrar usuário: ${result.message}`);
}
