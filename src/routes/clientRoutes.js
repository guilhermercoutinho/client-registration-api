import express from "express";
import { createClient, listClients } from "../controller/clientController.js";

const router = express.Router();

router.get("/", listClients);
router.post("/", createClient);

export default router;
