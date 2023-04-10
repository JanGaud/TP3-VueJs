module.exports = app => {
    const product = require('../controllers/product.controller.js')
    const router = require('express').Router()

    router.get('/', product.myFindAll)

    router.post('/', product.myCreate)

    router.delete('/:id', product.myDelete)

    router.put('/:id', product.myUpdate)

    app.use('/api/product', router)
}