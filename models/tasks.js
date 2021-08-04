const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
  nombre: {
    type: String,
    require: [true, "Nombre es obligatorio"],
  },
  descripcion: {
    type: String,
    require: [true, "descripcion es obligatorio"],
  },
  initialTime: {
    type: [Number],
  },
  creationDate: {
    type: Date,
  },
  restTime: {
    type: [Number],
  },
});

module.exports = model("Task", TaskSchema);
