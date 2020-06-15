const User = require('../models/User');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index (req, res){
    //busca usuarios em um raio de 10km
    const { latitude, longitude } = req.query; 

    const users = await User.find({
      location: {
        //Encontrar um ponto perto de uma localização (documentação mongooDB)
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          //Em metros
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ users });
  },

  async store (req, res) {
    const { email, name, avatar_url, password} = req.body;

    let user = await User.findOne({email});

    if(!user) {
      // const location = {
      //   type: 'Point',
      //   coordinates: [longitude, latitude],
      // }
      
      user = await User.create({
        email,
        name,
        // avatar_url,
        password,

      });
      // const sendSocketMessageTo = findConnections(
      //   {latitude, longitude},
      // );
      sendMessage(sendSocketMessageTo, 'new-User', user);
    }
    return res.send(user);
  }
}
