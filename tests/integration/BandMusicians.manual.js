const { Band, Musician } = require('../../index.js')
const { db } = require('../../db')

async function main () {

    // sync the whole database
    await db.sync({ force: true })



    // create some bands
    const metalica = await Band.create({
        name: 'Metalica',
        genre: 'Metal'
    })
    const kiss = await Band.create({
        name: 'Kiss',
        genre: 'Metal'
    })
    
    // create some musicians
    const owlcity = await metalica.createMusician({
        name: 'Owl City',
        instrument: 'singer'
    })
    const orvillpeck = await metalica.createMusician({
        name: 'Orvill Peck',
        instrument: 'Guitar'
    })
    const ozzy = await metalica.createMusician({
        name: 'Ozzy Osborn',
        instrument: 'Drums'
    })
    const susan = await metalica.createMusician({
        name: 'Susan Boyle',
        instrument: 'Tabmerine'
    })
}

main()