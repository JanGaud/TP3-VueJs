const db = require('../models')
const User = db.users
const bcrypt = require('bcrypt')

exports.myFindAll = (req, res) => {
    User.findAll()
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
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.send(user)
    } catch (err) {
        res.status(500).send({
            message: 'Could not create user: ' + err.message
        })
    }
}











