import { Router } from "express";
import { router as clientes } from "./app/routes/ClientesRouter";

const router: Router = Router();

router.use("/clientes", clientes);

export { router };
