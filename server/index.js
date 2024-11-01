const express = require('express');                    //Arquivo Principal do Servidor
const app = express();
const PORT = 5000;

// Middleware para JSON
app.use(express.json());

// Importa o arquivo de rotas
const recommendationsRoute = require('./routes/recommendations');

// Usa a rota para /recommendations
app.use('/recommendations', recommendationsRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});