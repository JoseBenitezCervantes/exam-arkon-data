const { Router } = require("express");
const {  tasksGet, addTask } = require("../controllers/tasks.controller");

const router = Router();

router.get("/", tasksGet);
router.post("/", addTask);

module.exports = router;