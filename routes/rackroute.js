const { allRacks, addRack, rackProductData } = require("../controller/racks");

const router = require("express").Router();

router.get("/", allRacks)

router.post("/add", addRack)

module.exports = router