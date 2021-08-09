const { Router } = require("express");
const {  getTask, addTask, updateTask, getTasks, deleteTask, getReportTasks } = require("../controllers/tasks.controller");

const router = Router();

router.get("/get/:id", getTask);
router.delete("/delete/:id", deleteTask);
router.post("/add", addTask);
router.put("/update", updateTask);
router.post("/getTasks", getTasks);
router.get("/getReportTasks", getReportTasks);

module.exports = router;  