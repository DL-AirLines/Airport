const db  = [];
let nextId = 1;

const model = (aeroporto, id = nextId++) => {
    if (
        aeroporto.viagens != "" && aeroporto.viagens != undefined &&
        aeroporto.aviao != "" && aeroporto.aviao != undefined &&
        aeroporto.empresa != "" && aeroporto.empresa != undefined &&
        aeroporto.nome != "" && aeroporto.nome != undefined
    ) {
        return {
            id,
            viagens: aeroporto.viagens,
            aviao: aeroporto.aviao,
            empresa: aeroporto.empresa,
            nome: aeroporto.nome
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

const index = () => {
    return db
};

const show = (id) => {
    const aeroporto = db.find(el => el.id == id)
};

const update = (body, id) => {
    const index = db.findIndex(el => el.id == el)
    const novo = model(body,id)

    if(index != -1 && novo){
        db[index] = novo
        return 200;
    }
    return 400
};

const destroy = (body,id) => {
    const index = db.findIndex(el => el.id == el)

    if(index != -1){
        db.splice(index,1)
        return 200;
    }
    return 400
};

module.exports = {store, index, show, update, destroy}