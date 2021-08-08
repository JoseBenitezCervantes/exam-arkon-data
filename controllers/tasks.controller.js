const { response } = require("express");
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

  const task = new Task(newTask);
  await task.save(task);
  res.status(200).json({ msg: "Tarea agregada", task });
};

const updateTask = async (req, res = response) => {
  const body = req.body;
  const { name, description, initialTime, restTime, id, statusTask } = body;
  const updateTask = {
    name,
    description,
    initialTime,
    restTime,
    statusTask,
  };
  console.log("🚀 ~ file: tasks.controller.js ~ line 28 ~ updateTask ~ updateTask", updateTask)

  const task = await Task.findByIdAndUpdate(id, updateTask, { new: true });
  res.status(200).json({ msg: "Tarea actualizada", task });
};

const getTask = async (req, res = response) => {
  const body = req.params;
  const { id } = body;
  const task = await Task.findById(id);
  res.status(200).json({ msg: "Tarea encontrada", task });
};

const getTasks = async (req, res = response) => {
  const body = req.body;
  const { findStatus } = body;
  const task = await Task.find({ $or: findStatus });
  res.status(200).json({ msg: "Resultado", task });
};

const deleteTask = async (req, res = response) => {
  const body = req.params;
  const { id } = body;
  const task = await Task.findByIdAndDelete(id);
  res.status(200).json({ msg: "Tarea Eliminada", task });
};

module.exports = { addTask, updateTask, getTask, getTasks, deleteTask };
