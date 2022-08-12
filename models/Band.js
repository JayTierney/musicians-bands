// this file is to define the band table 

const {db} = require('../db');
const { DataTypes } = require('sequelize');

const Band = db.define('Band', {
    name: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    }
})

module.exports = { Band };
