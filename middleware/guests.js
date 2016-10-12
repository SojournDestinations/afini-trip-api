const Trip = require('afini-common-library/models/Trip').model

const getGuests = (req, res, next) => {
  if (req.params.tripID) {
    let tripID = req.params.tripID

    Trip.findOne({tripID: tripID}, (err, trip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error finding trip guest list' })
      } else {
        return res.status(200).json(trip.guests)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing tripID to find guest list' })
  }
}

const addGuest = (req, res, next) => {
  if (req.params.tripID) {
    let tripID = req.params.tripID
    let data = req.body

    let newGuest = {
      name: data.name,
      email: data.email
    }

    Trip.findOneAndUpdate({tripID: tripID}, {$push: {guests: newGuest}}, {new: true}, (err, updatedTrip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error adding guest to trip' })
      } else {
        console.log('guest added to trip ' + updatedTrip.name)
        return res.status(200).json(updatedTrip.guests)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing tripID to add guests to trip' })
  }
}

// const removeGuest = (req, res, next) => {
//   if (req.params.tripID && req.body.name) {
//     let tripID = req.params.tripID
//     let name = req.params.name
//
//     Trip.findOneAndUpdate({tripID: tripID}, {$pull: {'trip.guests': {name: $}}})
//   } else {
//     return res.status(400).json({ message: 'Missing tripID to remove guest' })
//   }
// }

module.exports = {
  addGuest: addGuest,
  getGuests: getGuests
}
