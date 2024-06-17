import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import bcrypt from "bcryptjs";

const Admin = sequelize.define('tbl_admin', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'tbl_admin',
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
        { name: "id" },
      ]
    },
  ]
});

Admin.prototype.validPassword = async function (password) {

  const compare = bcrypt.compareSync(password, this.password);
  return compare;
};

export default Admin;