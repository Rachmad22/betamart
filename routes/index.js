const { allProducts, findProduct, addProduct, updateQty } = require("../controller");

const router = require("express").Router();

router.get("/", allProducts)
router.get("/:name?", findProduct)
router.post("/add", addProduct)
router.post("/payment", updateQty)

module.exports = router