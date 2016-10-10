const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const healthcheckRouter = express.Router()
// const rabbotRapper = require('afini-rabbitmq-plugin')

// Configuration setup
const config = require('afini-common-library')('afini-trip-api')
const port = config.get('port')
const dbConfig = config.get('db-connection')
// const rabbitConfig = config.get('rabbitMQ')

// MongoDB connection setup
require('./database/dbSetup')(dbConfig)

const getAccountTrips = require('./middleware/getAccountTrips')
const getTripByReservationID = require('./middleware/getTripByReservationID')
router.route('/reservation/:reservationID').get(getTripByReservationID)
router.route('/account/:accountID').get(getAccountTrips)

// Healthcheck - for load balancers
healthcheckRouter.route('/healthcheck').get((req, res) => {
  console.log('healthcheck')
  res.status(200).send('service: trip-api')
})

healthcheckRouter.route('/healthbad').get((req, res) => {
  console.log('throwing error')
  someUnknownObject.produceError()
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/trips', router)
app.use('/', healthcheckRouter)
app.listen(port)

// RabbitMQ connection setup
// rabbotRapper.setupClient('trip', rabbitConfig)

console.log('running on port: ' + port)
