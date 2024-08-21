const db  = [];
let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.viagem != "" && body.viagem != undefined &&
        body.aviao != "" && body.aviao != undefined &&
        body.empresa != "" && body.empresa != undefined &&
        body.nome != "" && body.nome != undefined
    ) {
        return {
            id,
            viagem: body.viagem,
            aviao: body.aviao,
            empresa: body.empresa,
            nome: body.nome
        }
    }
};

const store = (body) => {
    const novo = model(body)
    if(novo){
        db.push(novo);
        return 201;
    }
    return 400
};

const show = (id) => {
    const aeroporto = db.find(el => el.id == id)
};

const update = (body, id) => {
    const index = db.findIndex(el => el.id == id)
    const novo = model(body,id)

    if(index != -1 && novo){
        db[index] = novo
        return 200;
    }
    return 400
};

const destroy = (id) => {
    const index = db.findIndex(el => el.id == id)

    if(index != -1){
        db.splice(index,1)
        return 200;
    }
    return 400
};

const index = () => db;

module.exports = {store, index, show, update, destroy}