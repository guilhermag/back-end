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
    const {email, nome, sobrenome, data_nascimento, cpf} = req.body;
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

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email ja utilizado.");
        } else if (checkCandidatoVazio || checkCandidatoUndefined) {
            res.send("Cadastro não efetuado, possui campo nulo.");
        }

        pool.query(queries.createCandidato,
            [email, nome, sobrenome, data_nascimento, cpf], (error, results) => {
            if (error) throw error;
            res.status(201).send("Candidato cadastrado com sucesso");
            })
    });
};

const deleteStudent = (req, res) => {
    const email = req.params.email;

    pool.query(queries.deleteStudent, [email], (error, results) => {
        const candidatoNaoEncontrado = !results.rows.length;
        res.send('Candidato não existe no database')
    })
};


module.exports = {
    getCandidatos,
    getCandidatoByEmail,
    createCandidato,
    deleteStudent,
};