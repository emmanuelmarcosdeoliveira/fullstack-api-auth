import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("JWT Token não informado", 401);
  }
  const [, token] = authHeader.split(" ");

  console.log(token);

  return next();
}
