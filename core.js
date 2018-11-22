const wget = function(uri) {
  var options = {
    uri: uri,
    json: true // Automatically parses the JSON string in the response
  };
  return rp(options);
}

const Response = {
  text: function(text, speachText, card) {
    let res = {
      version: "1.0",
      sessionAttributes: {
        key: "value",
      },
      response: {
        "outputSpeech": {
          "type": "PlainText",
          "text": text,
          "ssml": "<speak>"+ (speachText ? speachText : text) +"</speak>",
          //"playBehavior": "REPLACE_ENQUEUED"
        }
      }
    };
    if (card)
      res.response.card = {
        "type": card.type,
        "title": card.title,
        "content": card.content,
        "text": card.text,
        "image": {
          "smallImageUrl": card.smImgUrl,
          "largeImageUrl": card.lgImgUrl
        }
      }; 
    return res;
  }
}

const getBucket = function(docRef) {
  return docRef.get().then(doc => {
      return (doc.exists) ? doc.data() : {};
  });
}

const Buckets = {
  getModule: function() {
    var docRef = db.collection("moduleBuckets").doc("moduleID");
    return getBucket(docRef);
  },
  getModuleUser: function() {
    var docRef = db.collection("moduleBuckets").doc("moduleID").collection("users").doc("userID");
    return getBucket(docRef);
  },
  getUser: function() {
    var docRef = db.collection("userBuckets").doc("userID");
    return getBucket(docRef);
  }
}

const updateModuleBucket = function() {
  var docRef = db.collection("moduleBuckets").doc("moduleID");
  docRef.update(moduleBucket);
}

const getModuleUserBucket = function() {
  var docRef = db.collection("moduleBuckets").doc("moduleID").collection("users").doc("userID");
  return getBucket(docRef);
}

const getUserBucket = function() {
  var docRef = db.collection("userBuckets").doc("userID");
  return getBucket(docRef);
}

module.exports = {
  Response,
  Buckets,
  wget
};