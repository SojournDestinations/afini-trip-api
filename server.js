const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const healthcheckRouter = express.Router()
// const authPlugin = require('afini-itops-authorizationplugin')
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
router.route('/:accountID').get(trip.getAccountTrips)
router.route('/:accountID/:tripID').put(trip.updateTripName)
// router.route('/:accountID/reservation/:reservationID').get(trip.getTripByReservationID)

// Itinerary Routes
const itinerary = require('./middleware/itinerary')
router.route('/:accountID/:tripID/itinerary').get(itinerary.getItinerary)
router.route('/:accountID/:tripID/itinerary/addItem').post(itinerary.addItem)
router.route('/:accountID/:tripID/itinerary/updateItem').put(itinerary.updateItem)
router.route('/:accountID/:tripID/itinerary/removeItem').delete(itinerary.removeItem)

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
