'use strict';

console.log('Carregando lambda');
const PESSOA = process.env.PESSOA;

exports.handler = (event, context, callback) => { //O evento chamda essa função
    console.log('Evento recebido:', JSON.stringify(event, null, 2)); //JSON.stringify(value[, replacer[, space]])

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res, null, 2),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    var mensagem = {
            "mensagem" : "Olá" + PESSOA, 
            "identity": event.requestContext.identity,
            "headers": event.headers,
            "event": event
    };
    switch (event.httpMethod) {
        case "GET":
            done(null, mensagem);
        default:
            done(new Error("Método não suportado"));
    }
};

