module.exports = app => {
    const user = require('../controllers/user.controller.js')
    const router = require('express').Router()

    router.get('/', user.myFindAll)

    router.post('/', user.myCreate)

    app.use('/api/user', router)

}