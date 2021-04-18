const Discord = require('discord.js')
const economy = require('../../economy.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['buy emerald tools', 'Buy emerald tools'],
  minArgs: 0,
  maxArgs: null,
  cooldown: 3,
  callback: async(message,arguments,text) => {
    const userId = message.author.id
    const coinspresent = await economy.getCoins(userId)
    var price = 50000000

    if(coinspresent > 50000000) {
      message.channel.send('Purchase Successful')
      const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'emeraldtool')
    } 
  }
}
