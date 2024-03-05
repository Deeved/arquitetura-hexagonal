import { Express } from "express";
import RegisterUser from "../../../application/user/register";

export class RegisterUserAPI {
  constructor(server: Express, useCase: RegisterUser) {
    server.post("/api/user/register", async (req, resp) => {
      try {
        const response = await useCase.execute({
          name: req.body.name,
          email: req.body.email,
        });
        resp.status(201).send(response.message);
      } catch (error: any) {
        resp.status(400).send(error.message);
      }
    });
  }
}
