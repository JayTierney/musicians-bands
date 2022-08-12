const path = require('path');
const { Sequelize } = require('sequelize');

const db = new Sequelize ({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'data.sqlite'),
    logging: false
})

module.exports = { db };

/**
 * path.join('a', 'b', 'c') will be 'a/b/c' on linux and 'a\b\c' on windows
 */
