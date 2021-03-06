const express = require('express');
const rotasCandidatos = require('./routes/routes');

const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(cors());

app.use('/api/v1/candidatos', rotasCandidatos);


app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
