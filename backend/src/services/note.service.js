import Note from "../models/Note.model.js";
import Ticket from "../models/Ticket.model.js";
import ApiError from "../utils/ApiError.js";

const createNote = async (ticketId, noteText) => {
  if (!noteText || !noteText.trim()) {
    throw new ApiError(400, "Note text is required");
  }

  const ticket = await Ticket.findOne({ ticketId });
  
  if (!ticket) {
    throw new ApiError(404, "Ticket not found");
  }

  const note = await Note.create({
    ticketId: ticket._id,
    noteText: noteText.trim(),
  });

  return note;
};

const getTicketNotes = async (ticketId) => {
  const ticket = await Ticket.findOne({ ticketId });

  if (!ticket) {
    throw new ApiError(404, "Ticket not found");
  }

  const notes = await Note.find({
    ticketId: ticket._id,
  }).sort({ createdAt: -1 });

  return notes;
};

export { createNote, getTicketNotes };
