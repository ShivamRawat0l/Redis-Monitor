import pkg from 'sequelize';
const { Sequelize, DataTypes, Model } = pkg;
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
  "Redis",
  {
    md5: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    host: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    add_time: { 
      type: DataTypes.DATE 
    },
    cdd_time: { 
      type: DataTypes.DATE 
    }
  },
  {
    updatedAt: "add_time",
    createdAt: "cdd_time",
  }
);

export {
  User
}