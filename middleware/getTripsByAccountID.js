const Trip = require('afini-common-library/models/Trip').model

const getTripsByAccountID = (req, res, next) => {
  if (req.params.accountID) {
    let accountID = req.params.accountID

    Trip.find({accountID: accountID}, (err, accountTrips) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ message: 'System error finding trips for account' })
      } else {
        return res.status(200).json(accountTrips)
      }
    })
  } else {
    return res.status(400).json({ message: 'Missing accountID for trip search' })
  }
}

module.exports = getTripsByAccountID
