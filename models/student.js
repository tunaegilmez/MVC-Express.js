import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Student = sequelize.define(
  "students",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    schema: "public",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful!");
    await sequelize.sync({ alter: true });
    console.log("Tables synchronized!");
  } catch (error) {
    console.error("Database connection or synchronization error:", error);
  }
})();

export default Student;
