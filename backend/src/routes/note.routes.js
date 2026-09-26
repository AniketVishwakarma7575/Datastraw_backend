import express from "express";
import { createNote, getTicketNotes } from "../controllers/note.controller.js";

const router = express.Router();

router.post("/:ticketId/notes", createNote);

router.get("/:ticketId/notes", getTicketNotes);

export default router;
