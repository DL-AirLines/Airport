const express = require('express');
const controllers_aviao = require("./controllers/aviao");
const controllers_aeromoca = require("./controllers/aeromoça");
const app = express();
const porta = 5000;

app.use(express.json())

// aviao
app.get('/aviao', (req, res) => {
    const content = controllers_aviao.showAll()
    res.json(content)
});

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

// aeromoça
app.get('/aeromoca', (req, res) => {
    const content = controllers_aeromoca.showAll()
    res.json(content)
});

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
