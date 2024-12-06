import prisma from "../config/prismaClient.js";

const validateClientExistent = async (req, res, next) => {
  const { id } = req.params;

  try {
    const client = await prisma.client.findUnique({ where: { id } });

    if (!client) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao verificar cliente" });
  }
};

export default validateClientExistent;
