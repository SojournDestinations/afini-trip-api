const Trip = require('afini-common-library/models/Trip').model

const getItinerary = (req, res, next) => {
  if (req.params.tripID) {
    let tripID = req.params.tripID

    Trip.findOne({tripID: tripID}, (err, trip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error finding trip itinerary' })
      } else {
        return res.status(200).json(trip.itinerary)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing tripID to get itinerary' })
  }
}

module.exports = getItinerary
