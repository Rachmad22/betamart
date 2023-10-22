const express = require ("express")
const productPath = require("./routes")
const rackPath = require("./routes/rackroute")
const bodyParser = require("body-parser");


const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
      status: true,
      message: "Server running",
      version: "2.0.0",
    });
  });

app.use('/products', productPath)

app.use('/racks', rackPath)

const port = 4545

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})