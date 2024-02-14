import { Router } from "express";
import { getClientes, getCliente } from "../controllers/ClientesController";
export const router: Router = Router();

router.get("/:id", getCliente);
router.get("/", getClientes);
