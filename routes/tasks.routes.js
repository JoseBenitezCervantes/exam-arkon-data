const { Router } = require("express");
const {  getTask, addTask, updateTask, getTasks } = require("../controllers/tasks.controller");

const router = Router();

router.get("/get", getTask);
router.post("/add", addTask);
router.put("/update", updateTask);
router.get("/getTasks", getTasks);

module.exports = router;