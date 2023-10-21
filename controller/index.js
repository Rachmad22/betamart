const path = './db/productsData.json'
const pathRack = './db/racks.json'
const encoded = "utf-8"
const fs = require('fs/promises')

// read all products
const allProducts = async (req, res) => {
    try {
        const data = await fs.readFile(path, encoded)
        res.status(200).json({
            status: true,
            message: "success",
            total: JSON.parse(data)?.length,
            data: JSON.parse(data)
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error?.message ?? error ?? "We got trouble in the database",
            total: 0,
            data: [],
        })
    }
}

// get product by name
const findProduct = async (req, res) => {
    try {
        const {name} = req.params
        const data = await fs.readFile(path, encoded)
        const result = JSON.parse(data).find((data)=> data?.name.toLowerCase() === name.toLowerCase())
        res.status(200).json({
            status: true,
            message: "success",
            total: result?.length,
            data: result ? result : "data doesnt exist"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error?.message ?? error ?? "We got trouble in the database",
            total: 0,
            data: [],
        })
    }
}

// add product
const addProduct = async (req, res) => {
    try {
        // read all products
        const oldData = await fs.readFile(path, encoded)
        const data = Object.values(JSON.parse(oldData))
        const {id, name, catagory, price, qty, rack} = req.body

        // get product by catagory
        const getData = data.filter((data)=> data?.catagory.toLowerCase() === catagory.toLowerCase())
        
        // check total qty
        let currentCapacityRack = 0
        const maxLoad = getData.map((data)=>{
            currentCapacityRack += data?.qty
        })
        
        // get rack max capacities
        const rackData = await fs.readFile(pathRack, encoded)
        const getDataRack = Object.values(JSON.parse(rackData))
        const objectData = getDataRack.find((data)=> data?.id === rack)
        
        // cannt add product if rack is full filled
        if(objectData?.load < currentCapacityRack + qty){
            throw{
                message : "rack is full filled"
            }
        }

        // push new product to db
        data.push({id: id, name: name, catagory: catagory, price: price, qty: qty, rack: rack})
        const add = await fs.writeFile(path, JSON.stringify(data), encoded)
        res.status(200).json({
            status: true,
            message: "success",
            data: "added data"
        })
    } catch (error) {
        res.status(400).json({
            status: true,
            message: error?.message ?? error,
            data: "failed to add data"
    })
}
}

const updateQty = async(req, res) => {
    try {
        // read all products
        const oldData = await fs.readFile(path, encoded)
        const data = Object.values(JSON.parse(oldData))
        const {id, name, catagory, price, qty, rack} = req.body

        // get product by catagory
        const getData = data.findIndex((data)=> data?.id === id)

        console.log(getData);
    } catch (error) {
        res.status(400).json({
            status: true,
            message: error?.message ?? error,
            data: "failed to get the product"
    })
}
}

module.exports = {
    allProducts,
    findProduct,
    addProduct,
    updateQty
}