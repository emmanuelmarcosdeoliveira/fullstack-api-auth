import { Router } from "express"

import { sessionsRoutes } from "./sessions.routes"
import { productsRoutes } from "./products.routes"

const routes = Router()
routes.use("/sessions", sessionsRoutes)
routes.use("/products", productsRoutes)

export { routes }
