import { Request, Response } from "express";
import {
  showClientesService,
  showClienteService,
} from "../services/ClientesService";

export const getClientes = async (req: Request, res: Response) => {
  try {
    const serviceResponse = await showClientesService();
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(500).end();
  }
};

export const getCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const serviceResponse = await showClienteService(id);
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(404).end();
    return;
  }
};
