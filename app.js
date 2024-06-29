import express from "express";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

export const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

app.use(errorMiddleware);

export default app;
