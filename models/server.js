const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
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
    this.app.use("/api/users", require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("process.env.PORT", this.port);
    });
  }
}

module.exports = Server;
