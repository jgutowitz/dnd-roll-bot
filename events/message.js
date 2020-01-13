const kick = require('../commands/kick.js');
const ping = require('../commands/ping.js');
const addplayer = require('../commands/addplayer.js');

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
    else if (message.content.startsWith('Hey Bot')) {
        return message.reply('Fuck off baby')
    }
    //must be final branch
    else if (message.content.startsWith('!')) {
        return message.reply(`I do not understand the command: ${message}`)
    }
}
