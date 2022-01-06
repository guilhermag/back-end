const getCandidatos = 'SELECT * FROM candidatos';
const getCandidatoByEmail = 'SELECT * FROM candidatos WHERE email = $1';
const checkEmailExists = 'SELECT c FROM candidatos c WHERE c.email = $1';
const createCandidato = 'INSERT INTO candidatos (email, nome, sobrenome, data_nascimento, cpf) ' +
    'VALUES ($1, $2, $3, $4, $5)';
const deleteCandidato = 'DELETE FROM candidatos WHERE email = $1';

module.exports = {
    getCandidatos,
    getCandidatoByEmail,
    checkEmailExists,
    createCandidato,
    deleteCandidato,
}