const express = require("express");
const cors = require("cors");
const DBconection = require("../config/db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    DBconection();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Parse body
    this.app.use(express.json());

    //Directorio Publico
    this.app.use(express.static("public"));
  }
 
  routes() {
    this.app.use("/api/tasks", require("../routes/tasks.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("process.env.PORT", this.port);
    });
  }
}

module.exports = Server;
