 import {DataTypes} from "sequelize";
 import _tbl_admin from "./tbl_admin.js";
//  import _tbl_bookings from "./tbl_bookings";
//  import _tbl_movies from "./tbl_movies";
//  import _tbl_payments from "./tbl_payments";
//  import _tbl_tickets from "./tbl_tickets";
 import _tbl_users from "./tbl_users.js";

function initModels() {
  var tbl_admin = _tbl_admin;
  // var tbl_bookings = _tbl_bookings(sequelize, DataTypes);
  // var tbl_movies = _tbl_movies(sequelize, DataTypes);
  // var tbl_payments = _tbl_payments(sequelize, DataTypes);
  // var tbl_tickets = _tbl_tickets(sequelize, DataTypes);
  var tbl_users = _tbl_users;


  return {
    tbl_admin,
    // tbl_bookings,
    // tbl_movies,
    // tbl_payments,
    // tbl_tickets,
    tbl_users,
  };
}

export default initModels;
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
