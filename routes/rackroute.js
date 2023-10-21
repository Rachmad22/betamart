const { allRacks, addRack } = require("../controller/racks");

const router = require("express").Router();

router.get("/", allRacks)
router.post("/add", addRack)
// router.get("/:name?", findProduct)

module.exports = router