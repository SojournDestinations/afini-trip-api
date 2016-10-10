const Trip = require('afini-common-library/models/Trip').model

const getTripByReservationID = (req, res, next) => {
  if (req.params.reservationID) {
    let reservationID = req.params.reservationID

    Trip.findOne({'reservations.reservationID': reservationID}, (err, trip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error finding trips by reservationID' })
      } else {
        return res.status(200).json(trip)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing reservationID to find trips' })
  }
}

module.exports = getTripByReservationID
