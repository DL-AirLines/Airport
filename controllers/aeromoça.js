const db  = [];
let nextId = 1;

const model = (aeromoca, id = nextId++) => {
    if (
        aeromoca.nome != "" && aeromoca.nome != undefined &&
        aeromoca.empresa != "" && aeromoca.empresa != undefined &&
        aeromoca.aviao != "" && aeromoca.aviao != undefined &&
        aeromoca.viagem != "" && aeromoca.viagem != undefined
    ) {
        return {
            id,
            nome: aeromoca.nome,
            empresa: aeromoca.empresa,
            aviao: aeromoca.aviao,
            viagem: aeromoca.viagem
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
    const aeromoca = db.find(el => el.id == id)
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