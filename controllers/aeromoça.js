const db = [];
let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.nome != "" && body.nome != undefined &&
        body.empresa != "" && body.empresa != undefined &&
        body.aviao != "" && body.aviao != undefined &&
        body.viagem != "" && body.viagem != undefined
    ) {
        return {
            id,
            nome: body.nome,
            empresa: body.empresa,
            aviao: body.aviao,
            viagem: body.viagem
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
    const aeromoca = db.find(el => el.id == id)
};

const update = (body, id) => {
    // console.log('body: ', body) - Debug para achar o problema
    // console.log('id', id) - Debug para achar o problema
    const index = db.findIndex(el => el.id == id)
    const novo = model(body,id)

    console.log(index)
    console.log(novo)
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