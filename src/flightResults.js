export default data = {
  meta: {
    count: 5,
    links: {
      self:
        "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=IST&destinationLocationCode=BKK&departureDate=2020-09-01&adults=2&max=5",
    },
  },
  data: [
    {
      type: "flight-offer",
      id: "1",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2020-06-14",
      numberOfBookableSeats: 9,
      itineraries: [
        {
          duration: "PT31H",
          segments: [
            {
              departure: {
                iataCode: "IST",
                at: "2020-09-01T21:55:00",
              },
              arrival: {
                iataCode: "ALA",
                at: "2020-09-02T06:05:00",
              },
              carrierCode: "KC",
              number: "912",
              aircraft: {
                code: "321",
              },
              operating: {
                carrierCode: "KC",
              },
              duration: "PT5H10M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "ALA",
                at: "2020-09-03T01:15:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2020-09-03T08:55:00",
              },
              carrierCode: "KC",
              number: "931",
              aircraft: {
                code: "757",
              },
              operating: {
                carrierCode: "KC",
              },
              duration: "PT6H40M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "606.98",
        base: "364.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "606.98",
        additionalServices: [
          {
            amount: "67.01",
            type: "CHECKED_BAGS",
          },
        ],
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["KC"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "303.49",
            base: "182.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MOWKC",
              class: "M",
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MOWKC",
              class: "M",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
        {
          travelerId: "2",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "303.49",
            base: "182.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MOWKC",
              class: "M",
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MOWKC",
              class: "M",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "2",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2020-08-28",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT13H5M",
          segments: [
            {
              departure: {
                iataCode: "IST",
                at: "2020-09-01T00:55:00",
              },
              arrival: {
                iataCode: "MCT",
                at: "2020-09-01T06:50:00",
              },
              carrierCode: "WY",
              number: "166",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "WY",
              },
              duration: "PT4H55M",
              id: "5",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MCT",
                at: "2020-09-01T09:00:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2020-09-01T18:00:00",
              },
              carrierCode: "WY",
              number: "815",
              aircraft: {
                code: "788",
              },
              operating: {
                carrierCode: "WY",
              },
              duration: "PT6H",
              id: "6",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "668.12",
        base: "288.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "668.12",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["WY"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "334.06",
            base: "144.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "5",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "6",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
        {
          travelerId: "2",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "334.06",
            base: "144.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "5",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "6",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "3",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2020-08-28",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT25H25M",
          segments: [
            {
              departure: {
                iataCode: "IST",
                at: "2020-09-01T00:55:00",
              },
              arrival: {
                iataCode: "MCT",
                at: "2020-09-01T06:50:00",
              },
              carrierCode: "WY",
              number: "166",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "WY",
              },
              duration: "PT4H55M",
              id: "7",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MCT",
                at: "2020-09-01T21:20:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2020-09-02T06:20:00",
              },
              carrierCode: "WY",
              number: "817",
              aircraft: {
                code: "788",
              },
              operating: {
                carrierCode: "WY",
              },
              duration: "PT6H",
              id: "8",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "668.12",
        base: "288.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "668.12",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["WY"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "334.06",
            base: "144.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "7",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "8",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
        {
          travelerId: "2",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "334.06",
            base: "144.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "7",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "8",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "4",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2020-08-28",
      numberOfBookableSeats: 4,
      itineraries: [
        {
          duration: "PT30H25M",
          segments: [
            {
              departure: {
                iataCode: "IST",
                at: "2020-09-01T00:55:00",
              },
              arrival: {
                iataCode: "MCT",
                at: "2020-09-01T06:50:00",
              },
              carrierCode: "WY",
              number: "166",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "WY",
              },
              duration: "PT4H55M",
              id: "9",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "MCT",
                at: "2020-09-02T02:20:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2020-09-02T11:20:00",
              },
              carrierCode: "WY",
              number: "811",
              aircraft: {
                code: "788",
              },
              operating: {
                carrierCode: "WY",
              },
              duration: "PT6H",
              id: "10",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "668.12",
        base: "288.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "668.12",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["WY"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "334.06",
            base: "144.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "9",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "10",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
        {
          travelerId: "2",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "334.06",
            base: "144.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "9",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "10",
              cabin: "ECONOMY",
              fareBasis: "LELOTR",
              class: "L",
              includedCheckedBags: {
                weight: 30,
                weightUnit: "KG",
              },
            },
          ],
        },
      ],
    },
    {
      type: "flight-offer",
      id: "5",
      source: "GDS",
      instantTicketingRequired: false,
      nonHomogeneous: false,
      oneWay: false,
      lastTicketingDate: "2020-06-14",
      numberOfBookableSeats: 7,
      itineraries: [
        {
          duration: "PT16H",
          segments: [
            {
              departure: {
                iataCode: "IST",
                at: "2020-09-01T12:30:00",
              },
              arrival: {
                iataCode: "SVO",
                terminal: "F",
                at: "2020-09-01T16:00:00",
              },
              carrierCode: "SU",
              number: "2131",
              aircraft: {
                code: "73H",
              },
              operating: {
                carrierCode: "SU",
              },
              duration: "PT3H30M",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "SVO",
                terminal: "D",
                at: "2020-09-01T19:10:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2020-09-02T08:30:00",
              },
              carrierCode: "SU",
              number: "270",
              aircraft: {
                code: "77W",
              },
              operating: {
                carrierCode: "SU",
              },
              duration: "PT9H20M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "EUR",
        total: "670.30",
        base: "268.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "670.30",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
      },
      validatingAirlineCodes: ["SU"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "335.15",
            base: "134.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "NVOA",
              brandedFare: "ER",
              class: "N",
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "NVOA",
              brandedFare: "ER",
              class: "N",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
        {
          travelerId: "2",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "EUR",
            total: "335.15",
            base: "134.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "NVOA",
              brandedFare: "ER",
              class: "N",
              includedCheckedBags: {
                quantity: 1,
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "NVOA",
              brandedFare: "ER",
              class: "N",
              includedCheckedBags: {
                quantity: 1,
              },
            },
          ],
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      BKK: {
        cityCode: "BKK",
        countryCode: "TH",
      },
      ALA: {
        cityCode: "ALA",
        countryCode: "KZ",
      },
      IST: {
        cityCode: "IST",
        countryCode: "TR",
      },
      SVO: {
        cityCode: "MOW",
        countryCode: "RU",
      },
      MCT: {
        cityCode: "MCT",
        countryCode: "OM",
      },
    },
    aircraft: {
      "321": "AIRBUS A321",
      "77W": "BOEING 777-300ER",
      "757": "BOEING 757",
      "738": "BOEING 737-800",
      "73H": "BOEING 737-800 (WINGLETS)",
    },
    currencies: {
      EUR: "EURO",
    },
    carriers: {
      WY: "OMAN AIR",
      SU: "AEROFLOT",
      KC: "JSC AIR ASTANA",
    },
  },
};
