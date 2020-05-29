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


app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)

app.listen(port, () => console.log(`server activated port ${port}`));
