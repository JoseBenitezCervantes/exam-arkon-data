const { Router } = require("express");
const {  getTask, addTask, updateTask, getTasks } = require("../controllers/tasks.controller");

const router = Router();

router.get("/get/:id", getTask);
router.post("/add", addTask);
router.put("/update", updateTask);
router.post("/getTasks", getTasks);

module.exports = router;  