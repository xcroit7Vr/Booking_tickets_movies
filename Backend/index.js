import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import sequelize from "./database.js";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
// import movieRouter from "./routes/movie-routes.js";
// import bookingsRouter from "./routes/booking-routes.js";
dotenv.config();

const app = express()
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.SECRET_KEY));
app.use("/user", userRouter);
app.use("/admin", adminRouter);
// app.use("/movie", movieRouter);
// app.use("/booking", bookingsRouter);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)