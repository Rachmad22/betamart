const path = './db/racks.json'
const pathProduct = './db/productsData.json'
const encoded = 'utf-8'
const fs = require('fs/promises')

// get all racks
const allRacks = async (req, res) => {
    try {
        const data = await fs.readFile(path, encoded)
        res.status(200).json({
            status: true,
            message: "success",
            total: data?.length,
            data: JSON.parse(data)
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "We got trouble in the database",
            total: 0,
            data: [],
        })
    }
}

// get product by rack
const rackProductData = async (req, res) => {
    try {
        const {id} = req.params
        const data = await fs.readFile(path, encoded)
        const result = JSON.parse(data).find((data)=> data?.id === id)
        
        const productData = await fs.readFile(pathProduct, encoded)
        const findProductRack = Object.values(JSON.parse(productData).filter((data)=> data.rack === id))
        console.log(findProductRack);
        res.status(200).json({
            status: true,
            message: "success",
            total: result?.length,
            data:  result ?? "data doesnt exist"
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

// add rack
const addRack = async (req, res) => {
    try {
        // get all racks
        const oldData = await fs.readFile(path, encoded)
        const data = Object.values(JSON.parse(oldData))
        const {id, name, load} = req.body
        // push new rack to rack's db
        data.push({id: id, name: name, load: load})
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

module.exports = {
    allRacks,
    addRack,
    rackProductData
}