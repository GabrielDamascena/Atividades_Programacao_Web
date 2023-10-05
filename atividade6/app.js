const express = require('express');
const app = express();
const port = 3000;

// Configurar o uso do EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));

// Rota para renderizar o formulário
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para processar os dados do formulário e renderizar a página de dados
app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.render('dados', { nome, endereco, telefone, data });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
