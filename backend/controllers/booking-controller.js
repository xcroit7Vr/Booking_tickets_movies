import initModels from "../models/init-models.js";

const { tbl_bookings: Bookings, tbl_tickets: Tickets, tbl_movies: Movie, tbl_users: User } = initModels();


export const newBooking = async (req, res, next) => {
  const { movie, date, seatNumber, user, price } = req.body;

  let existingMovie;
  let existingUser;
  try {
    existingMovie = await Movie.findByPk(movie);
    existingUser = await User.findByPk(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingMovie) {
    return res.status(404).json({ message: "Movie Not Found With Given ID" });
  }
  if (!user) {
    return res.status(404).json({ message: "User not found with given ID " });
  }
  let booking;

  try {

    const ticket = await Tickets.create({
      seat_no: seatNumber,
      id_movie: movie,
      price,
      date: new Date(date),
    });

    booking = await Bookings.create({
      id_ticket: ticket.id,
      id_user: user,
      payment_status: "pending",
    });

  } catch (err) {
    return console.log(err);
  }

  if (!booking) {
    return res.status(500).json({ message: "Unable to create a booking" });
  }

  return res.status(201).json({ booking });
  // return res.status(200);
};

export const getBookingById = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Bookings.findByPk(id);
  } catch (err) {
    return console.log(err);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unexpected Error" });
  }
  return res.status(200).json({ booking });
};

export const deleteBooking = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Bookings.findByPk(id).then(async(book) => {

      let ticket;
      try {
        
        ticket = await Tickets.destroy({
          where: {
                id : book.id_ticket,
              },
        })
      } catch (error) {
        console.log(error);
      }      
      
      return ticket
    })  

    

  } catch (err) {
    return console.log(err);
  }

  console.log(booking)

  if (!booking) {
    return res.status(500).json({ message: "Tidak Dapat Menghapus Booking" });
  }
  return res.status(200).json({ message: "Sukses Untuk Menghapus Booking" });
};
