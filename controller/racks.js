const path = './db/racks.json'
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
        res.status(500).json({
            status: false,
            message: "We got trouble in the database",
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
    addRack
}