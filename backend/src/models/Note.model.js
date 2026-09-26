import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        ticketId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket",
            required: true
        },

        noteText: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: false
        }
    }
);


const Note = mongoose.model("Note", noteSchema);

export default Note;