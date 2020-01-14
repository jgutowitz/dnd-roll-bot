const Player = require('../classes/player.js');
module.exports = (message, playerName) => {
    let name = new Player(playerName);
    console.log(name);

    return message.reply(`Player ${name} created!`)

}
