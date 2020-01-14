const Player = require('../classes/player.js');
module.exports = (message, playerName) => {
    let player = new Player(playerName);
    let name = player.getName();

    return message
        .reply(`Player ${name} created!`)

}
