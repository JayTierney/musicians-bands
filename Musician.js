// this file is to define the musician table 

const {db} = require('./db');
const { DataTypes } = require('sequelize');

const Musician = db.define('Musician', {
    name: {
        type: DataTypes.STRING,
    },
    instrument: {
        type: DataTypes.STRING,
    }
})

module.exports = {
    Musician
};

