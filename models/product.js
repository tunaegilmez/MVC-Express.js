import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Product = sequelize.define(
  "products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
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

export default Product;
