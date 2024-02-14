import { showClientes, showCliente, Cliente } from "../models/ClientesModel";

export const showClientesService = async (): Promise<Cliente[]> => {
  const modelResponse = await showClientes();

  if (modelResponse.length === 0) {
    throw new Error("Nenhum cliente encontrado");
  }

  return modelResponse;
};

export const showClienteService = async (id: string): Promise<Cliente> => {
  const modelResponse = await showCliente(+id);

  if (!modelResponse) {
    throw new Error("Cliente não encontrado");
  }

  return modelResponse;
};
