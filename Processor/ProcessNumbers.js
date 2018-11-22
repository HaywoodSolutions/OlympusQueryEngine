'use strict';

function ProcessNumbers(textnum) {
    var numwords={};
    var units = [
      "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
      "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
      "sixteen", "seventeen", "eighteen", "nineteen",
    ];

    var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    var scales = ["hundred", "thousand", "million", "billion", "trillion"]

    numwords["and"] = [1, 0];
    for (id in units)
      numwords[units[id]] = [1, id];
    for (id in tens)
      numwords[tens[id]] = [1, id * 10];
    for (id in scales)
      numwords[scales[id]] = [10 ** (id * 3 || 2), 0];

    current = result = 0
    for (word in textnum.split()) {
        if (numwords.indexOf(word) == -1)
          throw "Illegal word: " + word;

        scale = numwords[word][0]
        increment = numwords[word][1];
        current = current * scale + increment
        if (scale > 100) {
            result += current
            current = 0
        }
    }

    return result + current
}

function ProcessNumbers(s) {
    var Small = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10,
      'eleven': 11,
      'twelve': 12,
      'thirteen': 13,
      'fourteen': 14,
      'fifteen': 15,
      'sixteen': 16,
      'seventeen': 17,
      'eighteen': 18,
      'nineteen': 19,
      'twenty': 20,
      'thirty': 30,
      'forty': 40,
      'fifty': 50,
      'sixty': 60,
      'seventy': 70,
      'eighty': 80,
      'ninety': 90
    };

    var Magnitude = {
      'thousand':     1000,
      'million':      1000000,
      'billion':      1000000000,
      'trillion':     1000000000000,
      'quadrillion':  1000000000000000,
      'quintillion':  1000000000000000000,
      'sextillion':   1000000000000000000000,
      'septillion':   1000000000000000000000000,
      'octillion':    1000000000000000000000000000,
      'nonillion':    1000000000000000000000000000000,
      'decillion':    1000000000000000000000000000000000,
    };
    var a = s.toString().split(/[\s-]+/);
    var n = 0;
    var g = 0;
  
    function feach(w) {
      var x = Small[w];
      if (x != null) {
        g = g + x;
      } else if (w == "hundred") {
        g = g * 100;
      } else {
        x = Magnitude[w];
        if (x != null) {
          n = n + g * x
          g = 0;
        } else alert("Unknown number: "+w);
      }
    }  
  
    a.forEach(feach);
    return n + g;
}

module.exports.ProcessNumbers = ProcessNumbers