const Trip = require('afini-common-library/models/Trip').model

const getAccountTrips = (req, res, next) => {
  if (req.params.accountID) {
    let accountID = req.params.accountID

    Trip.find({accountID: accountID}, (err, accountTrips) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error finding trips for account' })
      } else {
        let tripList = []
        accountTrips = accountTrips.map((accountTrip) => { return accountTrip.toObject() }) // <-- Allows accountTrip reservation to be looped over below

        for (let trip of accountTrips) {
          let finalStartDate = trip.reservations[0].checkIn // <-- Initialize start date with first reservation checkIn
          let finalEndDate = trip.reservations[0].checkOut // <-- Initialize end date with first reservation checkOut

          // Check dates for any additional reservations
          for (let reservation of trip.reservations) {
            if (reservation.checkIn < finalStartDate) {
              finalStartDate = reservation.checkIn // <-- An additional reservation is on the trip with an earlier checkIn date
            }
            if (reservation.checkOut > finalEndDate) {
              finalEndDate = reservation.checkOut // <-- An additional reservation is on the trip with a later checkOut date
            }
          }

          let tripData = {
            tripID: trip.tripID,
            start: finalStartDate,
            end: finalEndDate,
            status: trip.status
          }
          tripList.push(tripData)
        }
        return res.status(200).json(tripList)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing accountID for trip search' })
  }
}

module.exports = getAccountTrips
