const { response } = require("express");
const { restTimeHors } = require("../misc/restTime");
const Task = require("../models/tasks");

const addTask = async (req, res = response) => {
  const body = req.body;
  const { name, description, initialTime, restTime } = body;
  const time = Date.now();
  const now = new Date(time);

  const newTask = {
    name,
    description,
    initialTime,
    creationDate: now.toLocaleDateString(),
    restTime,
    statusTask: "NEW",
  };

  try {
    const task = new Task(newTask);
    await task.save(task);
    res.status(200).json({ msg: "Tarea agregada", task });
  } catch (error) {
    res.status(500).json({ msg: "Error", error: error.toString() });
  }
};

const updateTask = async (req, res = response) => {
  const body = req.body;
  let { name, description, initialTime, restTime, id, statusTask } = body;
  let completedTime = "";
  if (statusTask === "FINISH") {
    completedTime = restTimeHors(restTime, initialTime);
  }
  const updateTask = {
    name,
    description,
    initialTime,
    restTime,
    statusTask,
    completedTime,
  };
  try {
    const task = await Task.findByIdAndUpdate(id, updateTask, { new: true });
    res.status(200).json({ msg: "Tarea actualizada", task });
  } catch (error) {
    res.status(500).json({ msg: "Error", error: error.toString() });
  }
};

const getTask = async (req, res = response) => {
  const body = req.params;
  const { id } = body;
  try {
    const task = await Task.findById(id);
    res.status(200).json({ msg: "Tarea encontrada", task });
  } catch (error) {
    res.status(500).json({ msg: "Error", error: error.toString() });
  }
};

const getTasks = async (req, res = response) => {
  const body = req.body;
  const { findStatus } = body;
  try {
    const task = await Task.find({ $or: findStatus });
    res.status(200).json({ msg: "Resultado", task });
  } catch (error) {
    res.status(500).json({ msg: "Error", error: error.toString() });
  }
};

const deleteTask = async (req, res = response) => {
  const body = req.params;
  const { id } = body;
  try {
    const task = await Task.findByIdAndDelete(id);
    res.status(200).json({ msg: "Tarea Eliminada", task });
  } catch (error) {
    res.status(500).json({ msg: "Error", error: error.toString() });
  }
};

module.exports = { addTask, updateTask, getTask, getTasks, deleteTask };
