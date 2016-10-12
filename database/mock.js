const tripDate = new Date().getUTCDate()

const trips = [
  // Past trip
  {
    tripID: '998',
    accountID: 1,
    name: 'Germany Sep 09, 2016',
    status: 'active',
    guests: [
      {
        name: 'John Doe',
        email: 'johndoe@email.com'
      }
    ],
    reservations: [
      {
        reservationID: 'p1p1p1',
        residenceID: '5',
        checkIn: '2016-09-01',
        checkOut: '2016-09-04'
      }
    ],
    itinerary: [
      {
        itemID: 'item998-1',
        date: '2016-09-01',
        type: 'flight',
        time: '09:00',
        status: 'approved',
        description: 'Southwest flight arrives'
      },
      {
        itemID: 'item998-2',
        date: '2016-09-04',
        type: 'flight',
        time: '11:30',
        status: 'approved',
        description: 'Southwest flight departs'
      }
    ]
  },
  // Past trip
  {
    tripID: '999',
    accountID: 1,
    name: 'Sydney Oct 10, 2016',
    status: 'active',
    guests: [
      {
        name: 'Bill Murray',
        email: 'billmurray@email.com'
      }
    ],
    reservations: [
      {
        reservationID: 'p2p2p2',
        residenceID: '2',
        checkIn: '2016-10-01',
        checkOut: '2016-10-04'
      }
    ],
    itinerary: [
      {
        itemID: 'item999-1',
        date: '2016-10-01',
        type: 'flight',
        time: '10:40',
        status: 'approved',
        description: 'American flight arrives'
      },
      {
        itemID: 'item999-2',
        date: '2016-10-04',
        type: 'flight',
        time: '13:30',
        status: 'approved',
        description: 'American flight departs'
      }
    ]
  },
  // Mock trip for today's date
  {
    tripID: '000',
    accountID: 1,
    name: 'Todays trip',
    status: 'active',
    guests: [
      {
        name: 'Nicolas Cage',
        email: 'nicolascage@email.com'
      }
    ],
    reservations: [
      {
        reservationID: 'f4f4f4',
        residenceID: '4',
        checkIn: '2016-10-' + tripDate,
        checkOut: '2016-10-' + (tripDate + 5)
      }
    ],
    itinerary: [
      {
        itemID: 'item000-1',
        date: '2016-10-' + tripDate,
        type: 'flight',
        time: '19:40',
        status: 'approved',
        description: 'Delta flight arrives'
      },
      {
        itemID: 'item000-2',
        date: '2016-10-' + (tripDate + 5),
        type: 'flight',
        time: '11:15',
        status: 'approved',
        description: 'Delta flight departs'
      }
    ]
  },
  {
    tripID: '101',
    accountID: 1,
    name: 'Tuscany Jan 01, 2017',
    status: 'active',
    guests: [
      {
        name: 'Willem Dafoe',
        email: 'willemdafoe@email.com'
      }
    ],
    reservations: [
      {
        reservationID: 'a1a1a1',
        residenceID: '1',
        checkIn: '2017-01-01',
        checkOut: '2017-01-04'
      }
    ],
    itinerary: [
      {
        itemID: 'item101-1',
        date: '2017-01-01',
        type: 'flight',
        time: '20:00',
        status: 'approved',
        description: 'Lufthansa flight arrives'
      },
      {
        itemID: 'item101-2',
        date: '2017-01-04',
        type: 'flight',
        time: '16:15',
        status: 'approved',
        description: 'Lufthansa flight departs'
      }
    ]
  },
  {
    tripID: '102',
    accountID: 1,
    name: 'Bali Feb 01, 2017',
    status: 'active',
    guests: [
      {
        name: 'Ryne Sandberg',
        email: 'rynesandberg@email.com'
      },
      {
        name: 'Mark Grace',
        email: 'markgrace@email.com'
      }
    ],
    reservations: [
      {
        reservationID: 'b2b2b2',
        residenceID: '2',
        checkIn: '2017-02-01',
        checkOut: '2017-02-05'
      }
    ],
    itinerary: [
      {
        itemID: 'item102-1',
        date: '2017-02-01',
        type: 'flight',
        time: '14:25',
        status: 'approved',
        description: 'American flight arrives'
      },
      {
        itemID: 'item102-2',
        date: '2017-02-05',
        type: 'flight',
        time: '13:00',
        status: 'approved',
        description: 'American flight departs'
      }
    ]
  },
  {
    tripID: '201',
    accountID: 2,
    name: 'Bali May 01, 2017',
    status: 'active',
    guests: [
      {
        name: 'Addison Russell',
        email: 'addisonrussell@email.com'
      },
      {
        name: 'Javier Baez',
        email: 'javierbaez@email.com'
      }
    ],
    reservations: [
      {
        reservationID: 'c2c2c2',
        residenceID: '2',
        checkIn: '2017-05-01',
        checkOut: '2017-05-04'
      }
    ],
    itinerary: [
      {
        itemID: 'item201-1',
        date: '2017-05-01',
        type: 'flight',
        time: '11:00',
        status: 'approved',
        description: 'Delta flight arrives'
      },
      {
        itemID: 'item201-2',
        date: '2017-05-04',
        type: 'flight',
        time: '08:15',
        status: 'approved',
        description: 'Delta flight departs'
      }
    ]
  },
  {
    tripID: '202',
    accountID: 2,
    name: 'Phuket Dec 01, 2016',
    status: 'active',
    guests: [
      {
        name: 'Anthony Rizzo',
        email: 'anthonyrizzo@email.com'
      }
    ],
    reservations: [
      {
        reservationID: 'd3d3d3',
        residenceID: '3',
        checkIn: '2016-12-01',
        checkOut: '2016-12-05'
      }
    ],
    itinerary: [
      {
        itemID: 'item202-1',
        date: '2016-12-01',
        type: 'flight',
        time: '13:40',
        status: 'approved',
        description: 'Southwest flight arrives'
      },
      {
        itemID: 'item202-2',
        date: '2016-12-05',
        type: 'flight',
        time: '16:15',
        status: 'approved',
        description: 'Southwest flight departs'
      }
    ]
  },
  {
    tripID: '301',
    accountID: 3,
    name: 'Phuket Jan 15, 2017',
    status: 'active',
    guests: [
      {
        name: 'Joe Maddon',
        email: 'joemaddon@email.com'
      },
      {
        name: 'Theo Epstein',
        email: 'theoepstein@email.com'
      }
    ],
    reservations: [
      {
        reservationID: 'e3e3e3',
        residenceID: '3',
        checkIn: '2017-01-15',
        checkOut: '2017-01-19'
      }
    ],
    itinerary: [
      {
        itemID: 'item301-1',
        date: '2017-01-15',
        type: 'flight',
        time: '12:40',
        status: 'approved',
        description: 'Delta flight arrives'
      },
      {
        itemID: 'item301-2',
        date: '2017-01-19',
        type: 'flight',
        time: '05:45',
        status: 'approved',
        description: 'Delta flight departs'
      }
    ]
  }
]

module.exports = trips
