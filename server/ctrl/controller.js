module.exports = {
  getInventory: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance.get_inventory()
    
      .then((inventory) => res.status(200).send(inventory))
      .catch((err) => {
        res.status(500).send({ errorMessage: "Could not find Inventory Item" });
        console.log(err);
      });
  },
  addProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;

    dbInstance
      .add_product([name, price, img])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res
          .status(500)
          .send({ errorMessage: "Couldn't add Product, we'll fix that" });
        console.log(err);
      });
  },
  deleteProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_product(id)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res
          .status(500)
          .send({ errorMessage: "Couldn't delete product, we'll fix that" });
        console.log(err);
      });
  },
};
