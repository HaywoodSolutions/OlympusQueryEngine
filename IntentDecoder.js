'use strict';

const { Days, TwelveHour } = require('DataTypes.js');

class IntentDecoder {
    constructor(name, keysWithPhrases) {
        var name = name;
        var keys = [];
        var phrases = {};
        for (let key in keysWithPhrases) {
            keys.push(key);
            this[key.toUpperCase()] = keys.indexOf(key);
            phrases[keysWithPhrases[key]] = key;
        }
    }
  
    getKey(phrase) {
        return this.phrases[phrase] ?  this.phrases[phrase] : null;
    }
  
    convertString(str) {
        for (var phrase of this.phrases) {
            str.replaceAll("phrase", (this.name + "." + this.phrases[phrase]).toUpperCase());
        }
        return str;
    }
}

module.exports.IntentDecoder = IntentDecoder