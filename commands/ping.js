module.exports = message => {
  const member = message.mentions.members.first()

  if(!member){
    return message.reply('Ping which user?')
  }

  return message
    .reply(`${member.user.tag} pong!`)

}
