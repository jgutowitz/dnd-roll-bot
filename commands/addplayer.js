const Player = require('../classes/player')
module.exports = (message, playerName) => {
  var player = new Player(playerName)
  name=player.getName()

  return message
    .reply(`Player ${name} created!`)

}
