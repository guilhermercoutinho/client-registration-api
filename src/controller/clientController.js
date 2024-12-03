import prisma from "../config/prismaClient.js";

const clients = [];

export const listClients = async (req, res) => {
  try {
    const allClients = await prisma.client.findMany();

    return res.status(200).json(allClients);
  } catch (error) {}
  return res.status(500).json({ error: "Erro ao listar clientes." });
};

export const createClient = (req, res) => {};
