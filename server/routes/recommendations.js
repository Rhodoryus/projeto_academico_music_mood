// Pasta routes é para os endpoints, ou seja, as rotas que o servidor vai ter
// O recommendations é o arquivo para o endpoint de recomendação

const express = require('express');
const router = express.Router();

// Exemplo de endpoint que retorna recomendações ->
router.post('/', (req, res) => {
    const { mood } = req.body;
    // Aqui, é onde faz a chamada para a API do Spotify com base no humor do usuário.
    res.json({ message: `Recomendações de música para o humor: ${mood}` });
});

module.exports = router;