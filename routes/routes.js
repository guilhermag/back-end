const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getCandidatos);
router.post('/', controller.createCandidato);
router.get('/:email', controller.getCandidatoByEmail);
router.put('/:email', controller.atualizarCandidato);
router.delete('/:email', controller.deleteCandidato);


module.exports = router;