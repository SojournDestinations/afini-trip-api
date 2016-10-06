const mongo = require('mongodb').MongoClient
const config = require('afini-common-library')('afini-trip-api')
const dbConfig = config.get('db-connection')
const mockTrips = require('./mock')

mongo.connect(dbConfig, (err, db) => {
  if (err) {
    console.log(err)
    db.close()
  } else {
    const trips = db.collection('trips')
    trips.insertMany(mockTrips, (err, result) => {
      if (err) {
        console.log('error seeding trip table')
        console.log(err)
        db.close()
      } else {
        console.log('trip table seeded with ' + result.insertedCount + ' documents')
        db.close()
      }
    })
  }
})
