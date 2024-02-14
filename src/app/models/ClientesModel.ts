import { data } from "./data";
export type Cliente = {
  id: string;
  nome: string;
  idade: string;
  cidade: string;
  saldo: {
    total: number;
    data_extrato: string;
    limite: number;
  };
  ultimas_transacoes: {
    valor: number;
    tipo: string;
    descricao: string;
    realizada_em: string;
  }[];
};

export const showClientes = async (): Promise<Cliente[]> => {
  return data.clientes;
};

export const showCliente = async (id: number): Promise<Cliente | null> => {
  const response = data.clientes.find(
    (cliente) => cliente.id === id.toString()
  );

  if (!response) {
    return null;
  }

  return response;
};
