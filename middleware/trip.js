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
            accountID: trip.accountID,
            name: trip.name,
            start: finalStartDate,
            end: finalEndDate,
            status: trip.status,
            reservations: trip.reservations
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

const updateTripName = (req, res, next) => {
  if (req.params.tripID) {
    let tripID = req.params.tripID
    let newName = req.body.name

    Trip.findOneAndUpdate({tripID: tripID}, {$set: {name: newName}}, {new: true}, (err, updatedTrip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error updating trip name' })
      } else {
        let finalStartDate = updatedTrip.reservations[0].checkIn // <-- Initialize start date with first reservation checkIn
        let finalEndDate = updatedTrip.reservations[0].checkOut // <-- Initialize end date with first reservation checkOut

        // Check dates for any additional reservations
        for (let reservation of updatedTrip.reservations) {
          if (reservation.checkIn < finalStartDate) {
            finalStartDate = reservation.checkIn // <-- An additional reservation is on the updatedTrip with an earlier checkIn date
          }
          if (reservation.checkOut > finalEndDate) {
            finalEndDate = reservation.checkOut // <-- An additional reservation is on the updatedTrip with a later checkOut date
          }
        }

        let formattedTrip = {
          tripID: updatedTrip.tripID,
          accountID: updatedTrip.accountID,
          name: updatedTrip.name,
          start: finalStartDate,
          end: finalEndDate,
          status: updatedTrip.status,
          reservations: updatedTrip.reservations
        }

        console.log('Trip name updated to ' + newName)
        return res.status(200).json(formattedTrip)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing tripID to update name' })
  }
}

module.exports = {
  getTripByReservationID: getTripByReservationID,
  getAccountTrips: getAccountTrips,
  updateTripName: updateTripName
}