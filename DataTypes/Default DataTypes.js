const { DataType, MergedDataType, CustomDataType } = require('./DataType.js');

const Day = new DataType({
  "MONDAY": ["monday"],
  "TUESDAY": ["tuesday"],
  "WEDNESDAY": ["wednesday"],
  "THURSDAY": ["thursday"],
  "FRIDAY": ["friday"],
  "SATURDAY": ["saturday"],
  "SUNDAY": ["sunday"],
});

const Year = new CustomDataType({
  "2018": ["2018", "twenty eighteen"],
  "2019": ["2019", "twenty nineteen"],
});

const DayYear = new MergedDataType([Day, " ", Year]);

const Time24h = new CustomDataType(new RegExp("([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]"));

const Time12h = new CustomDataType(new RegExp("(((0[1-9])|(1[0-2])):([0-5])(0|5)\s(a|p)m)"));

const Time = new MergedDataType(["(", Time24h, ")|(", Time24h, ")"]);

const DateTime = new MergedDataType([Day, " ", Time]);

console.log(DateTime.regex.toString());