const { allProducts, findProduct, addProduct, updateQty, productRack, productPrice } = require("../controller");

const router = require("express").Router();

router.get("/", allProducts)
router.get("/:name?", findProduct)
router.post("/add", addProduct)
router.post("/payment", updateQty)
router.get("/rack/:rack?", productRack)
router.get("/price-range", productPrice)

module.exports = router