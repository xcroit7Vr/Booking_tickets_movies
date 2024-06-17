import express from "express";
import {
  getAllStudios,
  getStudioById,
  postStudio
} from "../controllers/studio-controller.js";
import {jwtUserAuthorization} from "../helper/jwtAuthorization.js";

const studioRouter = express.Router();

// studioRouter.post("/signup", singup);
// studioRouter.post("/login", login);

// studioRouter.use(jwtUserAuthorization);

studioRouter.get("/:id", getStudioById);
studioRouter.get("/", getAllStudios);

studioRouter.post("/", postStudio);
// studioRouter.put("/", updateUser);
// studioRouter.delete("/:id", deleteUser);

// userRouter.get("/bookings/:id", getBookingsOfUser);

export default studioRouter;
