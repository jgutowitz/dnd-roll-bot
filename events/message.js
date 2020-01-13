const kick = require('../commands/kick')
const ping = require ('../commands/ping')
const addplayer = require('../commands/addplayer')

module.exports = (client, message) => {
  if (message.content.startsWith('!kick')) {
    return kick(message)
  }
  else if (message.content.startsWith('!ping')){
    return ping(message)
  }
  else if(message.content.startsWith('!addplayer')){
    playerName=message.toString().split(" ")[1]
    message.reply(`${playerName}`)
    return addplayer(message, playerName)
  }
  //must be final branch
  else if (message.content.startsWith('!')){
    return message.reply(`I do not understand the command: ${message}`)
  }
}
