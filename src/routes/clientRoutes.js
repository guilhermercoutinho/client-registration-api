import express from "express";
import {
  createClient,
  deleteClient,
  listClients,
  updateClient,
} from "../controller/clientController.js";

const router = express.Router();

router.get("/", listClients);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;
