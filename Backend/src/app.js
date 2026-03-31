import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";
import aiRoutes from "./routes/ai.routes.js";

config();

const app = express();

// Allow frontend to connect
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/ai", aiRoutes);



// Routes
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);

export default app;
