'use strict';


/**
 * Retorna lista de todas as guias de uma competência
 *
 * mes Integer Número do mês.
 * ano String Número do ano.
 * returns inline_response_200_2
 **/
exports.guiasGET = function(mes,ano) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/pdf'] = string;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna lista de todas as guias de uma competência.
 *
 * mes Integer 
 * ano String 
 * returns inline_response_200_8
 **/
exports.guiasListaGET = function(mes,ano) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "competencia" : "012022",
  "tipo" : "IRRF",
  "nome_arq" : "DARF IRRF - 202201 VENC 20_02_2022.pdf"
}, {
  "competencia" : "022022",
  "tipo" : "IRRF",
  "nome_arq" : "DARF IRRF - 202202 VENC 20_03_2022.pdf"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Faz o envio de uma guia para armazenamento.
 *
 * name String 
 * tipoGuia String 
 * guia byte[] 
 * returns inline_response_200_1
 **/
exports.guiasPOST = function(name,tipoGuia,guia) {
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

