const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.route("/").post(createProduct).get(getProducts);
router.route("/:id").patch(updateProduct).delete(deleteProduct);

module.exports = router;
