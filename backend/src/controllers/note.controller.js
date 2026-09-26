import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import {
  createNote as createNoteService,
  getTicketNotes as getTicketNotesService,
} from "../services/note.service.js";

const createNote = asyncHandler(async (req, res) => {
  const note = await createNoteService(req.params.ticketId, req.body.noteText);

  res.status(201).json(new ApiResponse(201, note, "Note created successfully"));
});

const getTicketNotes = asyncHandler(async (req, res) => {
  const notes = await getTicketNotesService(req.params.ticketId);

  res
    .status(200)
    .json(new ApiResponse(200, notes, "Notes fetched successfully"));
});

export { createNote, getTicketNotes };
