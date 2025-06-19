import { Router } from "express";
import { ProductsController } from "@/controllers/products-controller";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const productsRoutes = Router();

const productsController = new ProductsController();
// Dessa forma abaixo estaríamos aplicando autorização em todas as rotas
// productsRoutes.use(verifyUserAuthorization(["sale", "admin"]));
productsRoutes.get("/", productsController.index);
productsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "admin"]),
  productsController.create
);

export { productsRoutes };
