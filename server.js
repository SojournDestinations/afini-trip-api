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

// Trip Routes
const trip = require('./middleware/trip')
router.route('/reservation/:reservationID').get(trip.getTripByReservationID)
router.route('/account/:accountID').get(trip.getAccountTrips)
router.route('/:tripID').put(trip.updateTripName)

// Itinerary Routes
const itinerary = require('./middleware/itinerary')
router.route('/:tripID/itinerary').get(itinerary.getItinerary)
router.route('/:tripID/itinerary/addItem').post(itinerary.addItem)
router.route('/:tripID/itinerary/updateItem').put(itinerary.updateItem)

// Guest Routes
const guests = require('./middleware/guests')
router.route('/:tripID/guests').get(guests.getGuests)
router.route('/:tripID/guests/addGuest').post(guests.addGuest)
// router.route('/:tripID/guests/removeGuest').delete(guests.removeGuest)

// Healthcheck - for load balancers
healthcheckRouter.route('/healthcheck').get((req, res) => {
  console.log('healthcheck')
  return res.status(200).send('service: trip-api')
})

healthcheckRouter.route('/healthbad').get((req, res) => {
  console.log('throwing error')
  someUnknownObject.produceError()
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/trips', router)
app.use('/', healthcheckRouter)
app.listen(port)

// RabbitMQ connection setup
// rabbotRapper.setupClient('trip', rabbitConfig)

console.log('running on port: ' + port)
