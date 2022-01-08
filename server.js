const express = require('express');
const rotasCandidatos = require('./routes/routes');
const { Pool } = require('pg')

const pool = require('./database');

const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.use('/api/v1/candidatos', rotasCandidatos);


app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
