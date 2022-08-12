const {db} = require('./db');
const {Band, Musician} = require('./index')
const {
    seedBand,
    seedMusician,
  } = require('./seedData');

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create(Band[0])
        expect(testBand.name).toEqual(Band[0])
    })

    test('can create a Musician', async () => {
        const testMusician = await Musician.create(Musician[0])
        expect(testMusician.name).toEqual(Musician[0])
    })

    test('band and musician realationship', async () => {
        await db.sync({ force: true })
        let metalica = await Band.create({
            name: 'Metalica',
            genre: 'Metal'
        })
        let owlcity = await Musician.create({
            name: 'Owl City',
            instrument: 'singer'
        })

        let orvillpeck = await Musician.create({
            name: 'Orvill Peck',
            instrument: 'Guitar'
        })

        await metalica.addMusician(owlcity);
        await metalica.addMusician(orvillpeck);

        const musicians = await metalica.getMusicians();

        expect(musicians[0] instanceof Musician).toBe(true);
        expect(musicians[0] instanceof Musician).toBeTruthy;
        expect(musicians[0].name).toEqual(owlcity.name);
        expect(musicians[1].name).toEqual(orvillpeck.name);
        expect(musicians.length).toEqual(2);
    })
})