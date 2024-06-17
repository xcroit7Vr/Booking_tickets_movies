import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const movie = sequelize.define('tbl_movies', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  cast: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  img_url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  sinopsis: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  director: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  trailer_url: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'tbl_movies',
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

export default movie;