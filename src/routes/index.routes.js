import { Router } from "express";
import planetasRoutes from "./planetas.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Bem vindo ao meu servidor!" });
});

routes.use("/planetas", planetasRoutes);

export default routes;