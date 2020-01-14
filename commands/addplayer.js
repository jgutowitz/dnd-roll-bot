const Player = require('../classes/player.js');
module.exports = (message, playerName) => {
    let player = new Player(playerName);
    console.log(player);

    message.reply(`Player ${player.name} created!`)
    // message.reply(`Health: ${player.health}!`)
    // message.reply(`Strength: ${player.stength}!`)
    // message.reply(`Dexterity: ${player.dexterity}!`)

}
