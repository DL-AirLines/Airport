
const empresa = require("./empresa");
const aviao = require("./aviao");
const aeroporto = require("./aeroporto");
//const viagem = require("./viagem");
const passageiro = require("./passageiro");

const db_passagem  = [];
let nextId = 1;

const model = (body, id = nextId++) => {
    if(
        body.cpf != "" && parseInt(body.cpf) &&
        parseInt(body.idade) &&
        body.contato != "" && body.contato != undefined 
    ){
        return {
            id,
            cpf: body.cpf,
            viagem: body.viagem,
            passagem: body.passagem,
            idade: body.idade,
            contato: body.contato,
            id_passageiro: body.id_passageiro
        }
    }
};


const store_passagem = (body) => {
    const novo = model(body)
    if(novo){
        db_passagem.push(novo);
        return 201;
    }
    return 400
};

//const show_passagem = (id) => db.find(el => el.id == id);

function show_passagem(id) {
    const passagemData = db_passagem.find(el => el.id == id);
    const passageiroData = passageiro.show_passageiro(passagemData.id_passageiro);


    retunr = {
        nome: passageiroData.nome,
        cpf: passageiroData.cpf,
        local: passagemData.viagem

    }
    
    return retunr
}

const update_passagem = (body, id) => {
    const index = db_passagem.findIndex(el => el.id == id)
    const novo = model(body,id)

    if(index != -1 && novo){
        db[index] = novo
        return 200;
    }
    return 400
};

const destroy_passagem = (id) => {
    const index = db_passagem.findIndex(el => el.id == id)

    if(index != -1){
        db.splice(index,1)
        return 200;
    }
    return 400
};

const index_passagem = () => db_passagem;

module.exports = {store_passagem, index_passagem, show_passagem, update_passagem, destroy_passagem}