import express from "express";
import {
  createClient,
  listClients,
  updateClient,
} from "../controller/clientController.js";

const router = express.Router();

router.get("/", listClients);
router.post("/", createClient);
router.put("/:id", updateClient);

export default router;
