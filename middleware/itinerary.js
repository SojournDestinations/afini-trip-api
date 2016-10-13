const Trip = require('afini-common-library/models/Trip').model
const uuid = require('node-uuid')

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

const addItem = (req, res, next) => {
  if (req.params.tripID && req.body.date && req.body.type) {
    let tripID = req.params.tripID
    let data = req.body

    let newItem = {
      itemID: uuid.v4(),
      date: data.date,
      time: data.time,
      description: data.description,
      type: data.type,
      status: data.status
    }

    Trip.findOneAndUpdate({tripID: tripID}, {$push: {itinerary: newItem}}, {new: true}, (err, updatedTrip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error adding itinerary item' })
      } else {
        console.log('Item added to trip itinerary')
        return res.status(200).json(updatedTrip.itinerary)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing parameters to add itinerary item' })
  }
}

// Entire itinerary item needs to be sent in request body
const updateItem = (req, res, next) => {
  if (req.params.tripID && req.body.itemID) {
    let tripID = req.params.tripID
    let itemID = req.body.itemID
    let data = req.body

    Trip.findOneAndUpdate({tripID: tripID, 'itinerary.itemID': itemID}, {new: true}, {$set: {'itinerary.$': data}}, {new: true}, (err, updatedTrip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error updating itinerary item' })
      } else {
        console.log('Itinerary item successfully updated')
        return res.status(200).json(updatedTrip.itinerary)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing parameters to update itinerary item' })
  }
}

const removeItem = (req, res, next) => {
  if (req.params.tripID && req.body.itemID) {
    let tripID = req.params.tripID
    let itemID = req.body.itemID

    Trip.findOneAndUpdate({tripID: tripID}, {$pull: {itinerary: {itemID: itemID}}}, {new: true}, (err, updatedTrip) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error removing itinerary item' })
      } else {
        console.log('itinerary item removed')
        return res.status(200).json(updatedTrip.itinerary)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing tripID or itemID to remove itinerary item' })
  }
}

module.exports = {
  getItinerary: getItinerary,
  addItem: addItem,
  updateItem: updateItem,
  removeItem: removeItem
}
