import express from "express";
import {
  getAllTicketBySchedule,
  postTicket
} from "../controllers/ticket-controller.js";
import {
  payTicket
} from "../controllers/payment-controller.js";
import {jwtUserAuthorization} from "../helper/jwtAuthorization.js";

const ticketRouter = express.Router();

ticketRouter.get("/schedule/:id_schedule", getAllTicketBySchedule);

ticketRouter.post("/payment", payTicket);
ticketRouter.post("/", postTicket);

export default ticketRouter;
