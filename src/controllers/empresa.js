const controllers_aviao = require("./aviao.js")
const controllers_piloto = require("./piloto.js")
const controllers_aeromoca = require('./aeromoca.js')
const controllers_passagem = require("./passagem.js")
const controllers_passageiro = require("./passageiro.js")

const db = []
let nextId = 1;

const model = (empresa, id = nextId++) => {
    if (
        empresa.nome != "" && empresa.nome != undefined &&
        controllers_aviao.show(id_aviao) &&
        controllers_piloto.show(id_piloto) &&
        controllers_aeromoca.show() 
    ) {
        return {
            id,
            nome: empresa.nome,
            empresa: empresa.empresa,
            aviao: empresa.aviao,
            viagem: empresa.viagem
        }
    }
};

