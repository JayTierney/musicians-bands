const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

// Musician n : 1 Band
Musician.belongsTo(Band)
Band.hasMany(Musician)

// Song n : m Band
Song.belongsToMany(Band, { through: 'Bands_Songs' })
Band.belongsToMany(Song, { through: 'Bands_Songs' })

module.exports = {
    Band,
    Musician,
    Song
};
