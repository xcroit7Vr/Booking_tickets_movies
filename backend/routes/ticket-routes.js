import express from "express";
import {
  getAllTicketBySchedule
} from "../controllers/ticket-controller.js";
import {jwtUserAuthorization} from "../helper/jwtAuthorization.js";

const ticketRouter = express.Router();

ticketRouter.get("/schedule/:id_schedule", getAllTicketBySchedule);
// ticketRouter.post("/signup", singup);
// ticketRouter.post("/login", login);

// ticketRouter.use(jwtUserAuthorization);

// ticketRouter.get("/:id", getUserById);
// ticketRouter.get("/", getAllUsers);
// ticketRouter.put("/", updateUser);
// ticketRouter.delete("/:id", deleteUser);

// userRouter.get("/bookings/:id", getBookingsOfUser);

export default ticketRouter;
