const kick = require('../commands/kick.js');
const ping = require('../commands/ping.js');
const addplayer = require('../commands/addplayer.js');
const d20 = require('d20');

module.exports = (client, message) => {
    if (message.content.startsWith('!kick')) {
        return kick(message)
    }
    else if (message.content.startsWith('!ping')) {
        return ping(message)
    }
    else if (message.content.startsWith('!addplayer')) {
        let playerName = message.toString().split(" ")[1];
        message.reply(`${playerName}`);
        return addplayer(message, playerName)
    }
    else if (message.content.startsWith('!roll')) {
        let dice = message.toString().split(" ")[1];
        if (dice === undefined) {
            return message.reply('Please specify the number side of dice you want to roll with.')
        } else {
            let result = d20.roll(dice);
            return message.reply(`Your roll is ${result}`)
        }
    }
    //must be final branch
    else if (message.content.startsWith('!')) {
        return message.reply(`I do not understand the command: ${message}`)
    }
};
