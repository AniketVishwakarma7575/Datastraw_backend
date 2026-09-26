import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { createTicket as createTicketService, getTickets, getTicketById as getTicketByIdService, updateTicket as updateTicketService } from "../services/ticket.service.js";

const createTicket = asyncHandler(async (req, res) => {
  const ticket = await createTicketService(req.body);

  res
    .status(201)
    .json(new ApiResponse(201, ticket, "Ticket created successfully"));
});

const getAllTickets = asyncHandler(async (req, res) => {
  const tickets = await getTickets(req.query);

  res 
    .status(200)
    .json(new ApiResponse(200, tickets,  "All tickets fetched successfully"));
});

const getTicketById = asyncHandler(async (req, res) => {
  const ticket = await getTicketByIdService(req.params.ticketId);

  res
    .status(200)
    .json( new ApiResponse(200, ticket, "Ticket fetched successfully"))
})


const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await updateTicketService(req.params.ticketId, req.body);

  res 
    .status(200)
    .json(
      new ApiResponse(200, ticket, "Ticket updated successfully")
    );

});

export {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicket,
};