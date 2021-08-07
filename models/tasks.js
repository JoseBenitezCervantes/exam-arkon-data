const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
  name: {
    type: String,
    require: [true, "Nombre es obligatorio"],
  },
  description: {
    type: String,
    require: [true, "descripcion es obligatorio"],
  },
  initialTime: {
    type: [Number],
  },
  creationDate: {
    type: String,
  },
  restTime: {
    type: [Number],
  },
  statusTask: {
    type: String,
  },
});

module.exports = model("Task", TaskSchema);
