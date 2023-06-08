const express = require("express");
const cors = require("cors");
const port = 8003;

// Import the Mongoose connection object from a separate module
const db = require("./config/mongoose");
// Import the application routes from a separate module
const routes = require("./routes/index");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

// Mount the application routes at the root path
app.use("/", routes);

app.listen(port, console.log("server is up and running"));
