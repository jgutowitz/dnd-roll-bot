const kick = require('../commands/kick')
const ping = require ('../commands/ping')

module.exports = (client, message) => {
  if (message.content.startsWith('!kick')) {
    return kick(message)
  }
  else if (message.content.startsWith('!ping')){
    return ping(message)
  }
  else if (message.content.startsWith('!')){
    return message.reply(`I do not understand the command: ${message}`)
  }
}
