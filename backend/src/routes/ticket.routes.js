import express from "express";
import { createTicket, getAllTickets, getTicketById, updateTicket } from "../controllers/ticket.controller.js";

const router = express.Router();

router.post("/", createTicket);

router.get("/", getAllTickets);

router.get("/:ticketId", getTicketById);

router.put("/:ticketId", updateTicket);

export default router;