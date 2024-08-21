const db = [];

const nextId = 1;

const model = (passageiro, id = nextId++) => {
    if(passageiro.nome != "" && passageiro.nome != undefined && passageiro.cpf != "" && isNaN(passageiro.cpf) && isNaN(passageiro.idade) && passageiro.contato != "" && passageiro.contato != undefined ){
        return{
            id,
            nome: passageiro.nome,
            cpf: passageiro.cpf,
            // viagem: ...
            //passagem ...
            idade: passageiro.idade,
            contato: passageiro.contato,
        };
    };
};

const store = (body) => {
    const novo = model(body);

    if(novo){
        db.push(novo);
        return 200;
    }
    return 400;
};

const index = () => {
    return db;
}

const show = (id) => db.find((el) => el.id == id);   

const update = (body, id) => {
    const index = db.findIndex((el) => el.id == id);
    const novo = model(body, parseInt(id));

    if(novo && index != -1){
        db[index] = novo;

        return 200;
    }
    return 400;
};

const destroy = (id) => {
    const index = db.findIndex((el) => el.id == id);

    if(index != -1){
        db.splice(index, 1);
    }
};

module.exports = {
    model, store, index, show, update, destroy
}

