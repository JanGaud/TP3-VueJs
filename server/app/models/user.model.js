module.exports = (connex, Sequelize) => {
    const User = connex.define('user', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    })
    return User
}
