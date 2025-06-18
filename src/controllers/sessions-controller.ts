import { Request, Response } from "express";

class SessionsController {
  async create(request: Request, response: Response) {
    return response.status(201).json({ message: process.env.USER_NAME });
  }
}

export { SessionsController };
