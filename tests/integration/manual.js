const { Band, Musician, Song } = require('../../models')
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

    // create some songs
    const thunderstruck = await metalica.createSong({
        title: 'Thunderstruck',
    })

    const verge = await metalica.createSong({
        title: 'Verge',
    })

    // kiss covers some songs
    await kiss.addSong(thunderstruck)
    await kiss.addSong(verge)

    /**
     * EAGER LOADING
     */

    // later on in our project, suppose we want to query the db for the kiss band
    const kissQuery = await Band.findOne({
        where: { name: 'Kiss' }
    })
    // notice that the returned object does not also have the songs for kiss!
    console.log('\n\nWithout songs:\n', kissQuery.toJSON())

    // however, if we pass an include key, we can get the songs as well
    const kissQueryWithSongs = await Band.findOne({
        where: { name: 'Kiss' },
        include: Song // pass the instance of Song to get kiss' songs
    })
    console.log('\n\nWith songs:\n', kissQueryWithSongs.toJSON())

}



main()
