const express = require('express');
const rotasCandidatos = require('./routes/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.use('/api/v1/candidatos', rotasCandidatos);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
