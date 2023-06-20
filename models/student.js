import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Student = sequelize.define(
  "students",
  {
    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_number: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    created_on: {
      type: DataTypes.DATE,
    },
    updated_on: {
      type: DataTypes.DATE,
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
    await sequelize.sync();
    console.log("Tables synchronized!");
  } catch (error) {
    console.error("Database connection or synchronization error:", error);
  }
})();

export default Student;
