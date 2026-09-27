import express from "express";
import cors from "cors";

// Middlewares
import errorHandler from "./middlewares/error.middleware.js";
import notFound from "./middlewares/notFound.middleware.js";

// Routes
import ticketRoutes from "./routes/ticket.routes.js";
import noteRoutes from "./routes/note.routes.js";

const app = express();
const frontendOrigins = process.env.FRONTEND_URL
  ?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean)
  .map((origin) => new URL(origin).origin);

app.use(
  cors({
    origin: frontendOrigins?.length ? frontendOrigins : undefined,
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
