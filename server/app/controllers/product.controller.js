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
