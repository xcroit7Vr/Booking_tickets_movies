import bcrypt from "bcryptjs";
// import Bookings from "../models/Bookings.js";
import initModels from "../models/init-models.js";
import updateOrCreate from "../helper/updateOrCreate.js";
import jwt from "jsonwebtoken";

const { tbl_schedule: Schedule, tbl_studio: Studio } = initModels();

export const getAllShedule = async (req, res, next) => {
    let studios;
    try {
        studios = await Schedule.findAll();
    } catch (err) {
        return console.log(err);
    }
    if (!studios) {
        return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ studios });
};

export const postSchedule = async (req, res, next) => {
    const {
        id_movie,
        id_studio,
        jadwal
    } = req.body;
    if (
        !id_movie &&
        id_movie.trim() === "" &&
        !id_studio &&
        id_studio.trim() === "" &&
        !jadwal &&
        jadwal.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }

    let schedule;
    try {
        schedule = await Schedule.create({ id_movie, id_studio, jadwal });
    } catch (err) {
        return console.log(err);
    }
    if (!schedule) {
        return res.status(500).json({ message: "Tidak dapat menyimpan ke jadwal!!!" });
    }
    return res.status(201).json({ id: schedule.id });
};

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


export const getScheduleByMovieId = async (req, res) => {
    const id = req.params.id;

    // console.log(id);
    let studios_schedule;
    try {       
        studios_schedule = await Schedule.aggregate('id_studio', 'DISTINCT', { plain: false, where: {id_movie : id} }).then(async (data) => {
            const studioPromise = await data.map(async (a) => {

                const listStudio = await Studio.findByPk(a.DISTINCT).then(async (val) => {
                    
                    const schedule = await Schedule.findAll({where: {
                        id_studio: val.id
                    }})

                    return {
                        id: val.id,
                        name: val.name,
                        address: val.address,
                        schedule
                    }
                })

                return listStudio;
            });

            return Promise.all(studioPromise).then(function (results) {
                return results;
            })
            
        })        

    } catch (err) {
        return console.log(err);
    }
    if (!studios_schedule) {
        return res.status(500).json({ message: "Tidak Dapat Mendapatkan Data Jadwal!!!" });
    }
    return res.status(200).json({ studios_schedule });
};
