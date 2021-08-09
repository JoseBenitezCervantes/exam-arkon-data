const { Router } = require("express");
const {  getTask, addTask, updateTask, getTasks, deleteTask, getReportTasks,setRamdonTask } = require("../controllers/tasks.controller");

const router = Router();

router.get("/get/:id", getTask);
router.delete("/delete/:id", deleteTask);
router.post("/add", addTask);
router.put("/update", updateTask);
router.post("/getTasks", getTasks);
router.get("/getReportTasks", getReportTasks);
router.get("/setRamdonTask", setRamdonTask);

module.exports = router;  