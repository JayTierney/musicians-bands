// this file is to define the song table

const {db} = require('../db');
const { DataTypes } = require('sequelize')

const Song = db.define('Song', {
    title: {
        type: DataTypes.STRING,
    }
})

module.exports = { Song }