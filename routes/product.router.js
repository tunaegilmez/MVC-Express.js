import express from "express";
import { body, query, param } from "express-validator";
import validator from "../middlewares/validator.js";
import Controller from "../controllers/product.js";

const router = express.Router();

router.get("/", validator, Controller.getProducts);

router.get("/new", Controller.getForm);

router.post(
  "/new",
  body(["name", "category"]).exists(),
  validator,
  Controller.addProduct
);

export default router;
