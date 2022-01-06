const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET da rota de usuarios'
    });
});

router.post('/', ((req, res, next) => {
    const usuario = {
        nome: req.body.nome,
        email: req.body.email
    };

    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de usuarios',
        usuarioCriado: usuario
    });
}));

router.get('/:id_usuario', (req, res, next) => {
    const id = req.params.id_usuario;

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID',
            id: id
        });
    }
})
router.patch('/', ((req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de usuarios'
    });
}));

router.delete('/', ((req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de usuarios'
    });
}));

module.exports = router;