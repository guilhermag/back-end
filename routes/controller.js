const pool = require('../database');
const queries = require('./queries');


const getCandidatos = (req, res) => {
    pool.query(queries.getCandidatos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCandidatoByEmail = (req, res) => {
    const email = req.params.email;
    pool.query(queries.getCandidatoByEmail, [email], (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const createCandidato = (req, res) => {
    const { email, nome, sobrenome, data_nascimento, cpf } = req.body;
    // verificar se o email existe e os campos não são nulos
    let checkCandidatoVazio =
        (email === "") ||
        (nome === "") ||
        (sobrenome === "") ||
        (data_nascimento === "") ||
        (cpf === "");

    let checkCandidatoUndefined =
        (email === undefined) ||
        (nome === undefined) ||
        (sobrenome === undefined) ||
        (data_nascimento === undefined) ||
        (cpf === undefined);

    let dataNascimento = new Date(data_nascimento);
    let diferencaDatas = Date.now() - dataNascimento.getTime();
    let idadeData = new Date(diferencaDatas);
    let idadeCalculada = Math.abs(idadeData.getUTCFullYear() - 1970);

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email ja utilizado.");
        }
        if (checkCandidatoVazio || checkCandidatoUndefined) {
            res.send("Cadastro não efetuado, possui campo nulo.");
        }
        if (idadeCalculada < 16) {
            res.send("Cadastro não efetuado, idade menor que 16 anos.")
        }

        pool.query(queries.createCandidato,
            [email, nome, sobrenome, data_nascimento, cpf], (error, results) => {
            if (error) throw error;
            res.status(201).send("Candidato cadastrado com sucesso");
            })
    });
};

const deleteCandidato = (req, res) => {
    const email = req.params.email;

    pool.query(queries.getCandidatoByEmail, [email], (error, results) => {
        const candidatoNaoEncontrado = !results.rows.length;
        if (candidatoNaoEncontrado) {
            res.send('Candidato não existe no banco de dados.');
        }

        pool.query(queries.deleteCandidato, [email], (error, results) => {
            if (error) throw error;
            res.status(200).send("Candidato removido com sucesso.")
        })
    });
};

const atualizarCandidato = (req, res) => {
    const email = req.params.email;
    let { nome, sobrenome, data_nascimento, cpf } = req.body;

    pool.query(queries.getCandidatoByEmail, [email], (error, results) => {
        //console.log(results.rows[0].nome);
        const candidatoNaoEncontrado = !results.rows.length;
        if (candidatoNaoEncontrado) {
            res.send('Candidato não existe no banco de dados.');
        }

        if (req.body.nome === undefined) {nome = results.rows[0].nome}
        if (req.body.sobrenome === undefined) {sobrenome = results.rows[0].sobrenome}
        if (req.body.data_nascimento === undefined) {data_nascimento = results.rows[0].data_nascimento}
        if (req.body.cpf === undefined) {cpf = results.rows[0].cpf}

        let hoje = new Date();
        let dataAtualizacao = hoje.getFullYear()+'-'+(hoje.getMonth()+1)+'-'+hoje.getDate();
        let horaAtualizacao = hoje.getHours() + ':' + hoje.getMinutes() + ':' + hoje.getSeconds();
        let atualizacaoExata = dataAtualizacao+' '+horaAtualizacao;

        pool.query(queries.atualizarCandidato,
            [nome, sobrenome, data_nascimento, cpf, atualizacaoExata, email], (error, results) => {
            if (error) throw error;
            res.status(200).send('Candidato foi atualizado com sucesso.');
            });
    })
}



module.exports = {
    getCandidatos,
    getCandidatoByEmail,
    createCandidato,
    deleteCandidato,
    atualizarCandidato,
};