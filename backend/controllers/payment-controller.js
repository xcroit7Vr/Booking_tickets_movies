
import initModels from "../models/init-models.js";
import midtransClient from "midtrans-client";

const { tbl_pa: Movie } = initModels();

export const payTicket = async (req, res, next) => {    

  let transactionToken;

    const {amount, name, email, phone, item} = req.body;

  try {
    let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
        clientKey: process.env.MIDTRANS_CLIENT_KEY
    });

    // console.log(snap);

let parameter = {
    "transaction_details": {
        "order_id": (Math.random() + 1).toString(36).substring(2),
        "gross_amount": amount
    },
    // "item_details" : item,
    // "customer_details": {
    //     "first_name": name,        
    //     "email": email,
    //     "phone": phone
    // }
};

    const transaction = await snap.createTransaction(parameter)

    transactionToken = transaction.token;
    
    

  } catch (err) {
    return console.log(err);
  }

  if (!transactionToken) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(201).json({ transactionToken });
};

// export const getAllMovies = async (req, res, next) => {
//   let movies;

//   try {
//     movies = await Movie.findAll();
//   } catch (err) {
//     return console.log(err);
//   }

//   if (!movies) {
//     return res.status(500).json({ message: "Request Failed" });
//   }
//   return res.status(200).json({ movies });
// };

// export const getMovieById = async (req, res, next) => {
//   const id = req.params.id;
//   let movie;
//   try {
//     movie = await Movie.findByPk(id);
//   } catch (err) {
//     return console.log(err);
//   }

//   if (!movie) {
//     return res.status(404).json({ message: "Invalid Movie ID" });
//   }

//   return res.status(200).json({ movie });
// };
