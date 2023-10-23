const { allProducts, findProduct, addProduct, updateQty, productRack, productPriceRange, findProductLimit } = require("../controller");

const router = require("express").Router();

router.get("/", allProducts)
router.get("/:name?", findProduct)
router.get("/search/limit?", findProductLimit)
router.post("/add", addProduct)
router.post("/payment", updateQty)
router.get("/rack/:rack?", productRack)
router.get("/price-range", productPriceRange)

module.exports = router