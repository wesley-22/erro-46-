'use strict';


/**
 * Faz o envio dos dados de login.
 *
 * returns inline_response_200_1
 **/
exports.loginPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

