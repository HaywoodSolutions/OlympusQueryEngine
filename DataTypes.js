const DataType = require('./DataType.js');

module.exports.Days = new DataType({
  MONDAY: {
    value: 0,
    str: ["monday", "mon"],
  },
  TUESDAY: {
    value: 0,
    str: ["tuesday", "tue"],
  },
  WEDNESDAY: {
    value: 0,
    str: ["wednesday", "wed"],
  },
  THURSDAY: {
    value: 0,
    str: ["thursday", "thu"],
  },
  FRIDAY: {
    value: 0,
    str: ["firday", "fri"],
  },
  SATURDAY: {
    value: 0,
    str: ["saturday", "sat"],
  },
  SUNDAY: {
    value: 0,
    str: ["sunday", "sun"],
  },
})

module.exports.TwelveHour = new DataType({
  1: {
    value: 0,
    str: ["one", "1"],
  },
  2: {
    value: 1,
    str: ["two", "2"],
  },
  3: {
    value: 2,
    str: ["three", "3"],
  },
  4: {
    value: 3,
    str: ["four", "4"],
  },
  5: {
    value: 4,
    str: ["five", "5"],
  },
  6: {
    value: 5,
    str: ["six", "6"],
  },
  7: {
    value: 6,
    str: ["seven", "7"],
  },
  8: {
    value: 7,
    str: ["eight", "8"],
  },
  9: {
    value: 8,
    str: ["nine", "9"],
  },
  10: {
    value: 9,
    str: ["ten", "10"],
  },
  11: {
    value: 10,
    str: ["eleven", "11"],
  },
  12: {
    value: 11,
    str: ["twelve", "12"],
  },
})