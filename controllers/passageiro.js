const db = [];
let nextId = 1;

const model = (body, id = nextId++) => {
    if(
        body.nome != "" && body.nome != undefined &&
        body.cpf != "" && parseInt(body.cpf) &&
        parseInt(body.idade) &&
        body.contato != "" && body.contato != undefined 
    ){
        return {
            id,
            nome: body.nome,
            cpf: body.cpf,
            // viagem: ...
            //passagem ...
            idade: body.idade,
            contato: body.contato
        }
    }
};

const store = (body) => {
    console.log("body", body)
    const novo = model(body);
    if(novo){
        db.push(novo);
        return 201;
    }
    return 400;
};

const show = id => db.find(el => el.id == id);

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
        return 200;
    }
    return 400
};

const index = () => db;

module.exports = {
    store, index, show, update, destroy
}

