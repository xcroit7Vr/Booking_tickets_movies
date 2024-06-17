import express from "express";
import {
  getAllShedule,
  getScheduleByMovieId,
  getScheduleById,
  postSchedule
} from "../controllers/schedule-controller.js";
import {jwtUserAuthorization} from "../helper/jwtAuthorization.js";

const scheduleRouter = express.Router();

// studioRouter.post("/signup", singup);
// studioRouter.post("/login", login);

// studioRouter.use(jwtUserAuthorization);

scheduleRouter.get("/:id", getScheduleById);
scheduleRouter.get("/", getAllShedule);
scheduleRouter.post("/", postSchedule);

scheduleRouter.get("/movie/:id", getScheduleByMovieId);

// studioRouter.put("/", updateUser);
// studioRouter.delete("/:id", deleteUser);

// userRouter.get("/bookings/:id", getBookingsOfUser);

export default scheduleRouter;
