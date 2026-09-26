import express from "express";
import cors from "cors";

// Middlewares
import errorHandler from "./middlewares/error.middleware.js";
import notFound from "./middlewares/notFound.middleware.js";

// Routes
import ticketRoutes from "./routes/ticket.routes.js";
import noteRoutes from "./routes/note.routes.js";

const app = express();
const frontendOrigin = process.env.FRONTEND_URL
  ? new URL(process.env.FRONTEND_URL.trim()).origin
  : undefined;

app.use(
  cors({
    origin: frontendOrigin,
  }),
);
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Support CRM API is running",
  });
});

app.use("/api/tickets", ticketRoutes);

app.use("/api/tickets", noteRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
