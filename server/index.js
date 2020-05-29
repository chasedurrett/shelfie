require("dotenv").config();
const massive = require("massive");
const express = require("express");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const port = SERVER_PORT;
const ctrl = require("./ctrl/controller");

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
.then((dbInstance) => {
  app.set("db", dbInstance);
});

app.use(express.json());

app.listen(port, () => console.log(`server activated port ${port}`));
