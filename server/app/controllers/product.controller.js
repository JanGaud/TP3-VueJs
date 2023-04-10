const db = require('../models')
const Product = db.products

exports.myFindAll = (req, res) => {
    Product.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not find the table'
            })
        })
}

exports.myCreate = async (req, res) => {
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type,
        photo: req.body.photo
    })
    res.send(product)
}

exports.myDelete = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const product = await Product.findByPk(id)
        if (!product) {
            res.status(404).send({
                message: `Product with id ${id} not found`
            })
        } else {
            await product.destroy()
            res.send({
                message: `Product with id ${id} has been deleted`
            })
        }
    } catch (err) {
        res.status(500).send({
            message: 'Could not delete the product'
        })
    }
}

exports.myUpdate = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const product = await Product.findByPk(id)
        if (!product) {
            res.status(404).send({
                message: `Product with id ${id} not found`
            })
        } else {
            await product.update({
                name: req.body.name || product.name,
                price: req.body.price || product.price,
                description: req.body.description || product.description,
                type: req.body.type || product.type,
                photo: req.body.photo || product.photo
            })
            res.send({
                message: `Product with id ${id} has been updated`
            })
        }
    } catch (err) {
        res.status(500).send({
            message: 'Could not update the product'
        })
    }
}



