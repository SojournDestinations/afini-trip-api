const Trip = require('afini-common-library/models/Trip').model

// Entire itinerary item needs to be sent in request body
const updateItem = (req, res, next) => {
  if (req.body.itemID) {
    let itemID = req.body.itemID
    let data = req.body

    Trip.findOneAndUpdate({'itinerary.itemID': itemID}, {$set: {'itinerary.$': data}}, {new: true}, (err, updatedTrip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error updating itinerary item' })
      } else {
        console.log('Itinerary item successfully updated')
        return res.status(200).json(updatedTrip)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing parameters to update itinerary item' })
  }
}

module.exports = updateItem
