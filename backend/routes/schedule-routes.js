import express from "express";
import {
  getAllShedule,
  getScheduleByMovieId,
  postSchedule
} from "../controllers/schedule-controller.js";
import {jwtUserAuthorization} from "../helper/jwtAuthorization.js";

const scheduleRouter = express.Router();

// studioRouter.post("/signup", singup);
// studioRouter.post("/login", login);

// studioRouter.use(jwtUserAuthorization);

scheduleRouter.get("/movie/:id", getScheduleByMovieId);
scheduleRouter.get("/", getAllShedule);

scheduleRouter.post("/", postSchedule);

// studioRouter.put("/", updateUser);
// studioRouter.delete("/:id", deleteUser);

// userRouter.get("/bookings/:id", getBookingsOfUser);

export default scheduleRouter;
