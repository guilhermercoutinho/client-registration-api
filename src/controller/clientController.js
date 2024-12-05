import prisma from "../config/prismaClient.js";

export const handleError = (
  res,
  error,
  message = "Erro interno do servidor."
) => {
  console.error(error);
  res.status(500).json({ error: message });
};

export const listClients = async (req, res) => {
  try {
    const allClients = await prisma.client.findMany();

    return res.status(200).json(allClients);
  } catch (error) {
    handleError(res, error, "Erro ao listar clientes");
  }
};

export const createClient = async (req, res) => {
  try {
    const data = req.body;

    await prisma.client.create({
      data: { ...data },
    });

    return res
      .status(201)
      .json({ message: "Cliente cadastrado com sucesso!", data });
  } catch (error) {
    handleError(res, error, "Erro ao cadastrar cliente");
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedClient = await prisma.client.update({
      where: { id },
      data: { ...data },
    });

    res.status(200).json({
      message: `Cliente Id: ${id} atualizado com sucesso.`,
      updatedClient,
    });
  } catch (error) {
    handleError(res, error, "Erro ao atualizar cliente");
  }
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.client.delete({
      where: { id },
    });

    res.status(200).send();
  } catch (error) {
    handleError(res, error, "Erro ao deletar cliente");
  }
};
