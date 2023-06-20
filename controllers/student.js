import Student from "../models/student.js";

const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    res.render("./students/index.ejs", { students });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getForm = (req, res) => {
  res.render("./students/new.ejs");
};

const addStudent = async (req, res) => {
  try {
    const { name, number } = req.body;
    await Student.create({ name, number });

    res.redirect("/students");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default {
  getStudents,
  getForm,
  addStudent,
};
