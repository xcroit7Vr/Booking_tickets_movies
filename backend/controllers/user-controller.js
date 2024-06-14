import bcrypt from "bcryptjs";
// import Bookings from "../models/Bookings.js";
import initModels from "../models/init-models.js";
import updateOrCreate from "../helper/updateOrCreate.js";
import jwt from "jsonwebtoken";

const { tbl_users: User } = initModels();

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.scope('withoutPassword').findAll();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ users });
};

export const singup = async (req, res, next) => {
  const {
    name,
    email,
    password,
    phone,
    bDay,
    province,
    city,
    gender,
  } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === "" &&
    !phone &&
    phone.trim() === "" &&
    !bDay &&
    !province &&
    province.trim() === "" &&
    !city &&
    city.trim() === "" &&
    !gender &&
    gender.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ where: { email } });
  } catch (err) {
    return console.log(err);
  }

  if (existingUser) {
    return res.status(400).json({ message: "User sudah ada!!!" });
  }

  let user;
  try {
    user = await User.create({ name, email, password, phone, b_date: bDay, province, city, gender });
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Tidak dapat menyimpan ke user!!!" });
  }
  return res.status(201).json({ id: user.id });
};

export const updateUser = async (req, res, next) => {
  // const id = req.params.id;
  const {
    id,
    name,
    email,
    password,
    phone,
    bDay,
    province,
    city,
    gender, 
  } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === "" &&
    !phone &&
    phone.trim() === "" &&
    !bDay &&
    !province &&
    province.trim() === "" &&
    !city &&
    city.trim() === "" &&
    !gender &&
    gender.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let user;
  try {



    user = await updateOrCreate(User, { user_id: id ? id : 0 }, { username, email, password, phone, bDay, province, city, gender });

  } catch (errr) {
    return console.log(errr);
  }

  if (!user) {
    return res.status(500).json({ message: "Something went wrong" });
  }
  res.status(200).json(user);
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.destroy({
      where: {
        user_id: id,
      },
    });
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Tidak Memiliki Data Dengan ID Tersebut,Tidak dapat menghapus data!!!" });
  }
  return res.status(200).json({ message: "Deleted Successfully" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  if (!email && email.trim() === "" && !password && password.trim() === "") {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ where: { email } }).then(async (userGet) => {
      if (userGet) {
        return await userGet.validPassword(password).then(valid => {
          if (valid) {
            return userGet;
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

  const token = jwt.sign({ id: existingUser.id, role: "user" }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  let options = {
    maxAge: 1000 * 60 * 60 * 24 * 7, // kadaluarsa setelah 7 hari
  }

  if (!existingUser) {
    return res
      .status(200)
      .json({ message: "User salah username atau password" });
  }


  return res
    .status(200)
    .cookie('jwtToken', `${token}`, options)
    .json({ message: "Authentication Selesai", token, id: existingUser.id });
};

// export const getBookingsOfUser = async (req, res, next) => {
//   const id = req.params.id;
//   let bookings;
//   try {
//     bookings = await Bookings.find({ user: id })
//       .populate("movie")
//       .populate("user");
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!bookings) {
//     return res.status(500).json({ message: "Unable to get Bookings" });
//   }
//   return res.status(200).json({ bookings });
// };

export const getUserById = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByPk(id);
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Tidak Dapat Mendapatkan Data User!!!" });
  }
  return res.status(200).json({ user });
};
