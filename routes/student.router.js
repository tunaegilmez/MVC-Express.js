import express from "express";
import { body, query, param } from "express-validator";
import validator from "../middlewares/validator.js";
import Controller from "../controllers/student.js";

const router = express.Router();

router.get("/", validator, Controller.getStudents);

router.get("/new", Controller.getForm);

router.post(
  "/new",
  body(["name", "number"]).exists(),
  validator,
  Controller.addStudent
);

export default router;
