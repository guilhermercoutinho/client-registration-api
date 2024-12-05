import express from "express";
import {
  createClient,
  deleteClient,
  listClients,
  updateClient,
} from "../controller/clientController.js";
import validateClientExistent from "../middleware/validateClientExistent.js";

const router = express.Router();

router.get("/", listClients);
router.post("/", createClient);
router.put("/:id", validateClientExistent, updateClient);
router.delete("/:id", validateClientExistent, deleteClient);

export default router;
