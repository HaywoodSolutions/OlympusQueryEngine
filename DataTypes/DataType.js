'use strict';

class DataType {
  constructor(obj) {
    this.val = [];
    this.map = {};
    let id;
    let possibleValues = [];
    for (var i in obj) {
      this.val.push(i);
      id = this.val.indexOf(i);
      for (var j of obj[i]) {
        possibleValues.push(j);
        this.map[j] = id;
      }
    }
    this.regex = new RegExp("(" + possibleValues.join("|") + ")", "g");
  }
}

DataType.prototype.get = function(str) {
  str = str.toLowerCase();
  return this.map[str] ? this.map[str] : null;
}

class MergedDataType {
  constructor(expressionList) {
    this.list = [];
    this.subRegex = [];
    for (let expression of expressionList) { 
      this.list.push(expression);
      if (typeof expression == "string") {
        this.subRegex.push(expression);
      } else {
        this.subRegex.push(expression.regex.source);
      }
    }
    this.regex = new RegExp(this.subRegex.join(""), "g");
  }
}

class CustomDataType {
  constructor(regex) {
    this.regex = new RegExp(regex, "g");
  }
}

module.exports.DataType = DataType
module.exports.MergedDataType = MergedDataType
module.exports.CustomDataType = CustomDataType