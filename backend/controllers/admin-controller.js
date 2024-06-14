import initModels from "../models/init-models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sequelize from "../database.js";
import { where } from "sequelize";

const { tbl_admin: Admin } = initModels();

export const addAdmin = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username && username.trim() === "" && !password && password.trim() === "" && !email && email.trim() === "") {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ where: { username } });
  } catch (err) {
    return console.log(err);
  }

  if (existingAdmin) {
    return res.status(400).json({ message: "Admin sudah ada!!!" });
  }

  let admin;
  try {
    admin = await Admin.create({ username, password, email });
  } catch (err) {
    return console.log(err);
  }
  if (!admin) {
    return res.status(500).json({ message: "Tidak dapat menyimpan ke admin!!!" });
  }
  return res.status(201).json({ admin });
};

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username && username.trim() === "" && !password && password.trim() === "") {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ where: { username } }).then(async (adminGet) => {
      if (adminGet) {
        return await adminGet.validPassword(password).then(valid => {
          if (valid) {
            return adminGet;
          }

          return false;
        });
      } else {
        return false;
      }
    });
  } catch (err) {
    return console.log(err);
  }
  if (!existingAdmin) {
    return res.status(400).json({ message: "Admin salah username atau password" });
  }

  const token = jwt.sign({ id: existingAdmin.id, role : "admin" }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  let options = {
    maxAge: 1000 * 60 * 60 * 24 * 7, // would expire after 15 minutes
  }

  return res
    .status(200)
    .cookie('jwtToken', `${token}`, options)
    .json({ message: "Authentication Selesai", token, id: existingAdmin.id });
};

export const getAdmins = async (req, res, next) => {
  let admins;
  try {
    admins = await Admin.scope('withoutPassword').findAll();
  } catch (err) {
    return console.log(err);
  }
  if (!admins) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ admins });
};

export const getAdminById = async (req, res, next) => {
  const id = req.params.id;

  let admin;
  try {
    admin = await Admin.scope('withoutPassword').findByPk(id);
  } catch (err) {
    return console.log(err);
  }
  if (!admin) {
    return console.log("Cannot find Admin");
  }
  return res.status(200).json({ admin });
};
