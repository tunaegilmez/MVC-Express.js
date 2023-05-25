import Product from "../models/product.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.render("./products/index.ejs", { products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getForm = (req, res) => {
  res.render("./products/new.ejs");
};

const addProduct = async (req, res) => {
  try {
    const { name, category } = req.body;
    await Product.create({ name, category });

    res.redirect("/products");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default {
  getProducts,
  getForm,
  addProduct,
};
