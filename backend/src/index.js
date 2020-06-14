//Express responsavel pelas rotas
const express = require('express');
//Responsavel pelo BD
const mongoose = require('mongoose');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

//Mongodb Atlas
//Para que funcione o backend é necessario ter uma conta no mongodb Atlas e substituir <username> e <password> 
//pelo seu login e senha do mesmo. Onde está <MapApp> é o nome do banco de dados.
mongoose.connect('mongodb+srv://<username>:<password>@cluster0-seyp3.mongodb.net/<MapAPP>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

server.listen(3333, () => {
  console.log('Executando...');
});
