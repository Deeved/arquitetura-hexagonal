import RegisterUser from "./src/application/user/register";
import UserRepositoryMemory from "./src/infrastructure/user/user-repository-memory";
import { RegisterUserAPI } from "./src/infrastructure/api/user/register-user-api";

const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRepositoryMemory = new UserRepositoryMemory();
const register = new RegisterUser(userRepositoryMemory);
new RegisterUserAPI(app, register);

app.listen(port, () => {
  console.log("Servidor excutando na porta 4000");
});
