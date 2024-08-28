const express = require('express');
const controllers_aviao = require("./controllers/aviao");
const controllers_aeromoca = require("./controllers/aeromoca");
const controllers_aeroporto = require("./controllers/aeroporto");
const controllers_passageiro = require("./controllers/passageiro");
const controllers_piloto = require("./controllers/piloto");
const controllers_passagem = require("./controllers/passagem");
const app = express();
const porta = 5000;

app.use(express.json())

//-----------------aviao----------------------
app.get('/aviao', (req, res) => {
    const content = controllers_aviao.index()
    res.json(content)
});

app.get("/aviao/:id", (req, res) => {
    const content = controllers_aviao.show(req.params.id)
    res.json(content)
})

app.post('/aviao', (req, res) => {
    const code = controllers_aviao.store(req.body);
    res.status(code).json()
});

app.put("/aviao/:id", (req, res) => {
    const code = controllers_aviao.update(req.body, req.params.id )
    res.status(code).json()
})

app.delete("/aviao/:id", (req, res) => {
    const code = controllers_aviao.destroy(req.params.id)
    res.status(code).json()
})

//---------------aeroporto-----------------------
app.get('/aeroporto', (req, res) => {
    const content = controllers_aeroporto.index()
    res.json(content)
});

app.get("/aeroporto/:id", (req, res) => {
    const content = controllers_aeroporto.show(req.params.id)
    res.json(content)
})

app.post('/aeroporto', (req, res) => {
    const code = controllers_aeroporto.store(req.body);
    res.status(code).json()
});

app.put("/aeroporto/:id", (req, res) => {
    const code = controllers_aeroporto.update(req.body, req.params.id )
    res.status(code).json()
})

app.delete("/aeroporto/:id", (req, res) => {
    const code = controllers_aeroporto.destroy(req.params.id)
    res.status(code).json()
})

//----------------passageiro---------------------
app.get('/passageiro', (req, res) => {
    const content = controllers_passageiro.index()
    res.json(content)
});

app.get("/passageiro/:id", (req, res) => {
    const content = controllers_passageiro.show_passageiro(req.params.id)
    res.json(content)
})

app.post('/passageiro', (req, res) => {
    const code = controllers_passageiro.store(req.body);
    res.status(code).json()
});

app.put("/passageiro/:id", (req, res) => {
    const code = controllers_passageiro.update(req.body, req.params.id )
    res.status(code).json()
})

app.delete("/passageiro/:id", (req, res) => {
    const code = controllers_passageiro.destroy(req.params.id)
    res.status(code).json()
})

//--------------piloto------------------
app.get('/piloto', (req, res) => {
    const content = controllers_piloto.index()
    res.json(content)
});

app.get("/piloto/:id", (req, res) => {
    const content = controllers_piloto.show(req.params.id)
    res.json(content)
})

app.post('/piloto', (req, res) => {
    const code = controllers_piloto.store(req.body);
    res.status(code).json()
});

app.put("/piloto/:id", (req, res) => {
    const code = controllers_piloto.update(req.body, req.params.id )
    res.status(code).json()
})

app.delete("/piloto/:id", (req, res) => {
    const code = controllers_piloto.destroy(req.params.id)
    res.status(code).json()
})

//--------------------aeromoça------------------
app.get('/aeromoca', (req, res) => {
    const content = controllers_aeromoca.index()
    res.json(content)
});

app.get("/aeromoca/:id", (req, res) => {
    const content = controllers_aeromoca.show(req.params.id)
    res.json(content)
})

app.post('/aeromoca', (req, res) => {
    const code = controllers_aeromoca.store(req.body);
    res.status(code).json()
});

app.put("/aeromoca/:id", (req, res) => {
    // console.log(req.params.id) - Debug para achar o problema
    // console.log(req.body) - Debug para achar o problema
    const code = controllers_aeromoca.update(req.body, req.params.id )
    res.status(code).json()
})

app.delete("/aeromoca/:id", (req, res) => {
    const code = controllers_aeromoca.destroy(req.params.id)
    res.status(code).json()
})

app.listen(porta, () => {
    console.log(`Iniciando...`);
});

//----------------passagem------------------

app.get('/passagem', (req, res) => {
    const content = controllers_passagem.index()
    res.json(content)
});

app.get("/passagem/:id", (req, res) => {
    const content = controllers_passagem.show_passagem(req.params.id)
    res.json(content)
})

app.post('/passagem', (req, res) => {
    const code = controllers_passagem.store_passagem(req.body);
    res.status(code).json()
});

app.put("/passagem/:id", (req, res) => {
    const code = controllers_passagem.update(req.body, req.params.id )
    res.status(code).json()
})

app.delete("/passagem/:id", (req, res) => {
    const code = controllers_passagem.destroy(req.params.id)
    res.status(code).json()
})

//------------------------empresa-------------------------------

app.get('/passagem', (req, res) => {
    const content = controllers_passagem.index()
    res.json(content)
});

app.get("/passagem/:id", (req, res) => {
    const content = controllers_passagem.show(req.params.id)
    res.json(content)
})

app.post('/passagem', (req, res) => {
    const code = controllers_passagem.store(req.body);
    res.status(code).json()
});

app.put("/passagem/:id", (req, res) => {
    const code = controllers_passagem.update(req.body, req.params.id )
    res.status(code).json()
})

app.delete("/passagem/:id", (req, res) => {
    const code = controllers_passagem.destroy(req.params.id)
    res.status(code).json()
})