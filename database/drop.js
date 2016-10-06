const mongo = require('mongodb').MongoClient
const config = require('afini-common-library')('afini-trip-api')
const dbConfig = config.get('db-connection')

mongo.connect(dbConfig, (err, db) => {
  if (err) {
    console.log(err)
  } else {
    db.dropDatabase()
    console.log('trip database dropped')
    db.close()
  }
})
