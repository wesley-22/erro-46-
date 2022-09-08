'use strict';


/**
 * Permite alterar a senha do login.
 *
 * returns inline_response_200_7
 **/
exports.usuarioCredenciaisPATCH = function() {
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


/**
 *
 * id Integer ID única do usuário.
 * no response value expected for this operation
 **/
exports.usuarioIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna os dados de usuário.
 *
 * id Integer ID do funcionario.
 * returns inline_response_200
 **/
exports.usuarioIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 0,
  "nome" : "Nome do Usuário"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Usuario_body  (optional)
 * id Integer ID do funcionário.
 * email String E-mail do usuário. (optional)
 * telefone Integer Telefone do usuário. (optional)
 * whatsapp Boolean Caso o telefone seja do whatsapp. (optional)
 * oauthgoogle String Oauth do usuário. (optional)
 * oauthhotmail String Oauth do usuário. (optional)
 * nome String Nome do usuário. (optional)
 * no response value expected for this operation
 **/
exports.usuarioIdPATCH = function(body,id,email,telefone,whatsapp,oauthgoogle,oauthhotmail,nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cadastra um novo usuário.
 *
 * no response value expected for this operation
 **/
exports.usuarioPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

