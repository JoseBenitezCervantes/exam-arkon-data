const { response } = require("express");

const usuariosGet = (req, res = response) => {
console.log("🚀 ~ file: usuarios.controller.js ~ line 4 ~ usuariosGet ~ req", req)
  res.status(200).json({ msg: "Hello World" });
};

const addUser = (req, res = response) => {
console.log("🚀 ~ file: usuarios.controller.js ~ line 8 ~ addUser ~ req", req.body)
  res.status(200).json({ msg: "Hello World" });
};

module.exports = { usuariosGet, addUser };
