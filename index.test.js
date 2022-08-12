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
        const testRelationship = await Band.findAll()
        expect(testRelationship).toEqual(seedMusician[0])
    })
})