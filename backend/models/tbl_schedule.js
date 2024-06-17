import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Schedule = sequelize.define('tbl_schedule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },    
    id_movie: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_studio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jadwal: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'tbl_schedule',
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


export default Schedule;