import express from "express";
import {
  deleteUser,
  getAllUsers,
  // getBookingsOfUser,
  getUserById,
  login,
  singup,
  updateUser,
} from "../controllers/user-controller.js";
import {jwtUserAuthorization} from "../helper/jwtAuthorization.js";

const userRouter = express.Router();

userRouter.post("/signup", singup);
userRouter.post("/login", login);

userRouter.use(jwtUserAuthorization);

userRouter.get("/:id", getUserById);
userRouter.get("/", getAllUsers);
userRouter.put("/", updateUser);
userRouter.delete("/:id", deleteUser);

// userRouter.get("/bookings/:id", getBookingsOfUser);

export default userRouter;
