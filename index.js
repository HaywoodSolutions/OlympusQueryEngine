const {NodeVM, VMScript} = require('vm2');
const ModuleBuilder = require('./builder.js');
const {Responce, Buckets, wget} = require('./core.js');
const intentsChecker = require('./intentsChecker.js');
const IntentsResource = require('./intents.js');

const vm = new NodeVM({
  sandbox: {wget, ModuleBuilder},
});

//vm.run("", "/intents.js");
const moduleCode = `module.exports = ModuleBuilder.addErrorHandlers("ABC")`;

const oldcode = `module.exports = function(who, callback) { wget('https://olympus-1bd1a.firebaseapp.com/v1beta1/modules').then(callback); }`


const run = `return ModuleBuilder;`;

let moduleAdd = vm.run(moduleCode);
console.log(moduleAdd);
