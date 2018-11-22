class IntentsChecker {
  constructor() {
    var types = ["Custom"];
  } 
  
  validate(intentsJSON) {
    for (let intent of intentsJSON) {
      if (!(this.checkName(intent.intentName)
              && this.checkType(intent.intentType)
              && this.checkPermissions(intent.permissions)
              && this.checkParametersDataTypes(intent.parameters)
              && this.checkPhrases(intent.phrases, intent.parameters)))
        return false;
    }
    return true;
  }
  
  checkName(name) {
    if (!name.match()) {
      console.log("Error -- Intent name is not valid");
      return false;
    }
    return true;
  }
  
  checkType(type) {
    var INTENT_TYPES = ["Custom"];
    if (!INTENT_TYPES.contains(type)) {
      console.log("ERROR -- Intent type is not valid");
      return false;
    }
    return true;
  }
  
  //TODO: get users permissions
  loadPermissions() {
    return ["ALLOW_BUCKETS"];
  }
  
  checkPermissions(permissions) {
    const ALLOWED_PERMISSIONS = this.loadPermissions();
    for (let perm in permissions) {
      if (!ALLOWED_PERMISSIONS.contains(perm)) {
        console.log('Error -- Permission '.perm.' is not valid or dont have access');
        return false;
      }
    }
    return true;
  }
  
  //TODO: get users permissions
  loadDataTypes() {
    return ["date"];
  }
  
  checkParametersDataTypes(parameters) {
    const DATA_TYPES = this.loadDataTypes();
    for (let param in parameters) {
      if (!DATA_TYPES.contains(param)) {
        console.log('Error -- DATA_TYPE '.(param).' doesnt not exist');
        return false;
      }
    }
    return true;
  }
  
  //TODO: update
  checkPhrases(phrases, parameters) {}
  
}

module.exports = new IntentsChecker();