import express from "express";
import db from "./config/db.js";
import expressLayouts from "express-ejs-layouts";
import studentRouter from "./routes/student.router.js";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");

db.sync()
  .then(() => {
    console.log("Database synchronized.");
    app.listen(port, () => {
      console.log(`The http homework app is listening on port ${port}.`);
    });
  })
  .catch(err => {
    console.error("Database synchronization error:", err);
  });

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/students", studentRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
