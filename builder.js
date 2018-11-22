class ModuleBuilder {
  constructor(){
    this.requestHandlers = [];
    this.errorHandlers = [];
  }
  
  addRequestHandlers() {
    for (let request of arguments)
      this.requestHandlers.push(request);
    return this;    
  }
  
  addErrorHandlers() {
    for (let error of arguments)
      this.errorHandlers.push(error);
    return this;
  }
}

module.exports = new ModuleBuilder();