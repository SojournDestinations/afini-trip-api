const trips = [
  {
    tripID: '123',
    accountID: 1,
    name: 'Tuscany Mar 10, 2017',
    status: 'active',
    flightInfo: [
      {
        airline: 'American',
        arrivalTime: '10:40 AM',
        departureTime: '12:30 PM',
        arrivalDate: '03-10-2017',
        departureDate: '03-17-2017'
      }
    ]
  },
  {
    tripID: '456',
    accountID: 2,
    name: 'Sri Lanka Dec 15, 2016',
    status: 'active',
    flightInfo: [
      {
        airline: 'United',
        arrivalTime: '11:40 PM',
        departureTime: '09:30 AM',
        arrivalDate: '12-15-2016',
        departureDate: '12-25-2016'
      }
    ]
  },
  {
    tripID: '789',
    accountID: 3,
    name: 'Phuket July 03, 2017',
    status: 'active',
    flightInfo: [
      {
        airline: 'Southwest',
        arrivalTime: '01:40 PM',
        departureTime: '4:15 PM',
        arrivalDate: '07-03-2017',
        departureDate: '07-10-2017'
      }
    ]
  }
]

module.exports = trips
