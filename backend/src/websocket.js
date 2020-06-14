//Para monitorar as alteraçoes em tempo real
const socketio = require('socket.io');
const calculateDistance = require('./models/utils/calculateDistance');

let io;
//Apenas para teste, em produção dentro do banco de dados
const connections = [];

exports.setupWebsocket = (server) => {
  io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
    })
  });
};

exports.findConnections = (coordinates) => {
  return connections.filter(connections => {

  return calculateDistance(coordinates, connections.coordinates) < 10});
};

exports.sendMessage = (to, message, data) => {
  to.forEach(connections => {
    io.to(connections.id).emit(message, data)
  });
}