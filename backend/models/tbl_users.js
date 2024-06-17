import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import bcrypt from "bcryptjs";

const User = sequelize.define('tbl_users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    b_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_users',
    timestamps: false,
    hooks: {
      beforeCreate: async (user) => {
        const salt = bcrypt.genSaltSync(4);
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      }
    },
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });

User.prototype.validPassword = async function (password) {

  const compare = bcrypt.compareSync(password, this.password);
  return compare;
};

export default User;