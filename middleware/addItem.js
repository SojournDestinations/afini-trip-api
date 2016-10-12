const Trip = require('afini-common-library/models/Trip').model
const uuid = require('node-uuid')

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

    Trip.findOneAndUpdate({tripID: tripID}, {$push: {itinerary: newItem}}, {new: true}, (err, updatedItinerary) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error adding itinerary item' })
      } else {
        console.log('Item added to trip itinerary')
        return res.status(200).json(updatedItinerary)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing parameters to add itinerary item' })
  }
}

module.exports = addItem
