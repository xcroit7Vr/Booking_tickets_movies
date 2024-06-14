// import Bookings from "../models/Bookings.js";
import initModels from "../models/init-models.js";
import updateOrCreate from "../helper/updateOrCreate.js";

const { tbl_tickets: Tickets } = initModels();

export const getAllTicketBySchedule = async (req, res, next) => {
    const id_schedule = req.params.id_schedule;
    const result = {};
  let tickets;
  try {
    tickets = await Tickets.findAll({
        where: {
            id_schedule 
        }
    });

    tickets.forEach(val => {
        result[val.seat_no] = val;
    })
  } catch (err) {
    return console.log(err);
  }
  if (!tickets) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(200).json({ tickets : result });
};

// export const postStudio = async (req, res, next) => {
//   const {
//     name,
//     address
//   } = req.body;
//   if (
//     !name &&
//     name.trim() === "" &&
//     !address &&
//     address.trim() === "" 
//   ) {
//     return res.status(422).json({ message: "Invalid Inputs" });
//   }

//   let existingStudio;
//   try {
//     existingStudio = await Schedule.findOne({ where: { name } });
//   } catch (err) {
//     return console.log(err);
//   }

//   if (existingStudio) {
//     return res.status(400).json({ message: "Studio sudah ada!!!" });
//   }

//   let studio;
//   try {
//     studio = await Schedule.create({ name, address });
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!studio) {
//     return res.status(500).json({ message: "Tidak dapat menyimpan ke studio!!!" });
//   }
//   return res.status(201).json({ id: studio.id });
// };

// export const updateUser = async (req, res, next) => {
//   // const id = req.params.id;
//   const {
//     id,
//     name,
//     email,
//     password,
//     phone,
//     bDay,
//     province,
//     city,
//     gender, 
//   } = req.body;
//   if (
//     !name &&
//     name.trim() === "" &&
//     !email &&
//     email.trim() === "" &&
//     !password &&
//     password.trim() === "" &&
//     !phone &&
//     phone.trim() === "" &&
//     !bDay &&
//     !province &&
//     province.trim() === "" &&
//     !city &&
//     city.trim() === "" &&
//     !gender &&
//     gender.trim() === ""
//   ) {
//     return res.status(422).json({ message: "Invalid Inputs" });
//   }

//   let user;
//   try {



//     user = await updateOrCreate(Studio, { user_id: id ? id : 0 }, { username, email, password, phone, bDay, province, city, gender });

//   } catch (errr) {
//     return console.log(errr);
//   }

//   if (!user) {
//     return res.status(500).json({ message: "Something went wrong" });
//   }
//   res.status(200).json(user);
// };

// export const deleteUser = async (req, res, next) => {
//   const id = req.params.id;
//   let user;
//   try {
//     user = await Studio.destroy({
//       where: {
//         user_id: id,
//       },
//     });
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!user) {
//     return res.status(500).json({ message: "Tidak Memiliki Data Dengan ID Tersebut,Tidak dapat menghapus data!!!" });
//   }
//   return res.status(200).json({ message: "Deleted Successfully" });
// };


// export const getStudioById = async (req, res) => {
//   const id = req.params.id;
//   let studio;
//   try {
//     studio = await Schedule.findByPk(id);
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!studio) {
//     return res.status(500).json({ message: "Tidak Dapat Mendapatkan Data User!!!" });
//   }
//   return res.status(200).json({  studio });
// };
