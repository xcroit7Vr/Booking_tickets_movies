import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const ticket = sequelize.define('tbl_tickets', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  seat_no: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  id_schedule: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'tbl_tickets',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "id" },
      ]
    },
  ]
});

export default ticket;