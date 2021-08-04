const { response } = require("express");

const tasksGet = (req, res = response) => {
  res.status(200).json({ msg: "Hello World" });
};

const addTask = (req, res = response) => {
console.log("🚀 ~ file: usuarios.controller.js ~ line 8 ~ addTask ~ req", req.body)
  res.status(200).json({ msg: "Hello World" });
};

module.exports = { tasksGet, addTask };
