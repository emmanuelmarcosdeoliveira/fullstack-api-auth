import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import { authConfig } from "@/configs/auth";
import { sign } from "jsonwebtoken";
class SessionsController {
  async create(request: Request, response: Response) {
    const fakeUser = {
      id: "1",
      username: "emmanuel",
      password: "123456",
      role: "customer",
    };

    const { username, password } = request.body;

    if (username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError("Usuário e/ou senha incorretas", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ role: fakeUser.role }, secret, {
      expiresIn,
      subject: String(fakeUser.id),
    });

    return response.json({ token });
  }
}

export { SessionsController };
