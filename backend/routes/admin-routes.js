import express from "express";
import {
  addAdmin,
  adminLogin,
  getAdminById,
  getAdmins,
} from "../controllers/admin-controller.js";
import {jwtAdminAuthorization} from "../helper/jwtAuthorization.js";

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);

adminRouter.use(jwtAdminAuthorization);

adminRouter.get("/",  getAdmins);
adminRouter.get("/:id", getAdminById);

export default adminRouter;
