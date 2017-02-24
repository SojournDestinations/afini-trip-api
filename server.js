const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
// const rabbotRapper = require('afini-rabbitmq-plugin')

// Configuration setup
const config = require('afini-common-library')('afini-trip-api')
const port = config.get('port')
const dbConfig = config.get('db-connection')
// const rabbitConfig = config.get('rabbitMQ')

// MongoDB connection setup
require('./database/dbSetup')(dbConfig)
const mongoose = require('mongoose')

const nocache = (req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  next()
}
// Healthcheck - for load balancers
router.route('/healthcheck').get(nocache, (req, res) => {
  let dbHealth = mongoose.connection.readyState
  if (dbHealth !== 1) {
    console.log('mongo disconnected')
    return res.status(500).send('error: database disconnected')
  } else {
    return res.status(200).send('service: trip-api')
  }
})

// Authorization Plugin Middleware
const authenticate = require('afini-itops-authorizationplugin').authenticate
const requireRoles = require('afini-itops-authorizationplugin').requireRoles
const excludeRoles = require('afini-itops-authorizationplugin').excludeRoles

// Trip Routes
const trip = require('./middleware/trip')
router.route('/all').get(authenticate, requireRoles(['lifestyle', 'lifestyle plus']), trip.getAll)
router.route('/:accountID').get(authenticate, excludeRoles(['prospect']), trip.getAccountTrips)
router.route('/:accountID/:tripID').put(authenticate, excludeRoles(['prospect']), trip.updateTripName)
router.route('/:accountID/:tripID').get(authenticate, excludeRoles(['prospect']), trip.getTrip)
// router.route('/:accountID/reservation/:reservationID').get(trip.byReservationID)

// Itinerary Routes
const itinerary = require('./middleware/itinerary')
router.route('/:accountID/:tripID/itinerary').get(authenticate, excludeRoles(['prospect']), itinerary.getItinerary)
router.route('/:accountID/:tripID/itinerary').post(authenticate, requireRoles(['lifestyle', 'lifestyle plus']), itinerary.addItem)
router.route('/:accountID/:tripID/itinerary').put(authenticate, excludeRoles(['prospect']), itinerary.updateItem)
router.route('/:accountID/:tripID/itinerary').delete(authenticate, requireRoles(['lifestyle', 'lifestyle plus']), itinerary.removeItem)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/trips', router)
app.use('/trips', router)
app.listen(port)

// RabbitMQ connection setup
// rabbotRapper.setupClient('trip', rabbitConfig)

console.log('running on port: ' + port)
