const db = [];
let nextId = 1;

const model = (body, id = nextId++) => {
    if(body.nome != "" && body.nome != undefined){
        return{
            id,
            nome: body.nome,
            //empresa: body.empresa
        };
    };
};

const store = body => {
    const novo = model(body);

    if(novo){
        db.push(novo);

        return 201;
    }

    return 400;
}

const show = id => db.find(el => el.id == id);

const update = (body, id) => {
    const index = db.findIndex(el => el.id == id);

    const novo = model(body, parseInt(id));

    if(index != -1 && db != "" && novo) { // pode dar erro no db ""
        db[index] = novo;
        return 200;
    }
}

const destroy = (id) => {
    const index = db.findIndex((el) => el.id == id);

    if(index != -1){
        db.splice(index, 1);
        return 200;
    };
    return 404;
};

const index = () => db;

module.exports = {
    store, show, index, update, destroy
};