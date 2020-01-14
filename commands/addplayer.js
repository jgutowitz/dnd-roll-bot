const Player = require('../classes/player.js');
module.exports = (message, playerName) => {
    console.log(message)
    console.log(playerName)
    let name = new Player(playerName);

    return message
        .reply(`Player ${name} created!`)

}
