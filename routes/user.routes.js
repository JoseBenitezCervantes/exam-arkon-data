const { Router } = require("express");
const { usuariosGet, addUser } = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", usuariosGet);
router.post("/", addUser);

module.exports = router;