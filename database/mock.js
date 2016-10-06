const trips = [
  {
    tripID: '101',
    accountID: 1,
    name: 'Tuscany Jan 01, 2017',
    status: 'active',
    flightInfo: [
      {
        airline: 'American',
        arrivalTime: '10:40 AM',
        departureTime: '12:30 PM',
        arrivalDate: '2017-01-01',
        departureDate: '2017-01-04'
      }
    ]
  },
  {
    tripID: '102',
    accountID: 1,
    name: 'Bali Feb 01, 2017',
    status: 'active',
    flightInfo: [
      {
        airline: 'Lufthansa',
        arrivalTime: '10:40 AM',
        departureTime: '12:30 PM',
        arrivalDate: '2017-02-01',
        departureDate: '2017-02-05'
      }
    ]
  },
  {
    tripID: '201',
    accountID: 2,
    name: 'Bali May 01, 2017',
    status: 'active',
    flightInfo: [
      {
        airline: 'United',
        arrivalTime: '11:40 PM',
        departureTime: '09:30 AM',
        arrivalDate: '2017-05-01',
        departureDate: '2017-05-04'
      }
    ]
  },
  {
    tripID: '202',
    accountID: 2,
    name: 'Phuket Dec 01, 2016',
    status: 'active',
    flightInfo: [
      {
        airline: 'Southwest',
        arrivalTime: '01:40 PM',
        departureTime: '4:15 PM',
        arrivalDate: '2016-12-01',
        departureDate: '2016-12-05'
      }
    ]
  },
  {
    tripID: '301',
    accountID: 3,
    name: 'Phuket Jan 15, 2017',
    status: 'active',
    flightInfo: [
      {
        airline: 'Southwest',
        arrivalTime: '01:40 PM',
        departureTime: '4:15 PM',
        arrivalDate: '2017-01-15',
        departureDate: '2017-01-19'
      }
    ]
  }
]

module.exports = trips
