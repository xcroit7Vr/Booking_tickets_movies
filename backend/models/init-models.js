import {DataTypes} from "sequelize";
import _tbl_admin from "./tbl_admin.js";
import _tbl_bookings from "./tbl_bookings.js";
import _tbl_movies from "./tbl_movies.js";
import _tbl_payments from "./tbl_payments.js";
import _tbl_tickets from "./tbl_tickets.js";
import _tbl_users from "./tbl_users.js";
import _tbl_studio from "./tbl-studio.js";
import _tbl_schedule from "./tbl_schedule.js";

function initModels() {
 var tbl_admin = _tbl_admin;
 var tbl_bookings = _tbl_bookings;
 var tbl_movies = _tbl_movies;
 var tbl_payments = _tbl_payments;
 var tbl_tickets = _tbl_tickets;
 var tbl_users = _tbl_users;
 var tbl_studio = _tbl_studio;
 var tbl_schedule = _tbl_schedule;


 return {
   tbl_admin,
   tbl_bookings,
   tbl_movies,
   tbl_studio,
   tbl_payments,
   tbl_tickets,
   tbl_users,
   tbl_schedule,
 };
}

export default initModels;
