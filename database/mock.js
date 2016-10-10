const tripDate = new Date().getUTCDate()

const trips = [
  // Past trip
  {
    tripID: '998',
    accountID: 1,
    name: 'Germany Sep 09, 2016',
    reservations: [
      {
        reservationID: 'p1p1p1',
        checkIn: '2016-09-01',
        checkOut: '2016-09-04'
      }
    ],
    status: 'active',
    flightInfo: [
      {
        airline: 'American',
        arrivalTime: '10:40 AM',
        departureTime: '12:30 PM',
        arrivalDate: '2016-09-01',
        departureDate: '2016-09-04'
      }
    ]
  },
  // Past trip
  {
    tripID: '999',
    accountID: 1,
    name: 'Sydney Oct 10, 2016',
    reservations: [
      {
        reservationID: 'p2p2p2',
        checkIn: '2016-10-01',
        checkOut: '2016-10-04'
      }
    ],
    status: 'active',
    flightInfo: [
      {
        airline: 'American',
        arrivalTime: '10:40 AM',
        departureTime: '12:30 PM',
        arrivalDate: '2016-10-01',
        departureDate: '2016-10-04'
      }
    ]
  },
  // Mock trip for today's date
  {
    tripID: '000',
    accountID: 1,
    name: 'Todays trip',
    reservations: [
      {
        reservationID: 'a1a1a1',
        checkIn: '2016-10-' + tripDate,
        checkOut: '2016-10-' + (tripDate + 5)
      }
    ],
    status: 'active',
    flightInfo: [
      {
        airline: 'American',
        arrivalTime: '10:40 AM',
        departureTime: '12:30 PM',
        arrivalDate: '',
        departureDate: ''
      }
    ]
  },
  {
    tripID: '101',
    accountID: 1,
    name: 'Tuscany Jan 01, 2017',
    reservations: [
      {
        reservationID: 'a1a1a1',
        checkIn: '2017-01-01',
        checkOut: '2017-01-04'
      }
    ],
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
    reservations: [
      {
        reservationID: 'b2b2b2',
        checkIn: '2017-02-01',
        checkOut: '2017-02-05'
      }
    ],
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
    reservations: [
      {
        reservationID: 'c2c2c2',
        checkIn: '2017-05-01',
        checkOut: '2017-05-04'
      }
    ],
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
    reservations: [
      {
        reservationID: 'd3d3d3',
        checkIn: '2017-12-01',
        checkOut: '2017-12-05'
      }
    ],
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
    reservations: [
      {
        reservationID: 'e3e3e3',
        checkIn: '2017-01-15',
        checkOut: '2017-01-19'
      }
    ],
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
