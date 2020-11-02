const discord = require("discord.js");
const {bot} = require('../index');
const config = require("../config.json");


//Welcome & goodbye messages\\
bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === `${config.welcome}`);
	if (!channel) return message.reply('This channel does not exist!');

	channel.send(`Welcome to the server, ${member}!`);
});

bot.on('message', message => {
	if (message.content === '!join') {
		bot.emit('guildMemberAdd', message.member);
	}
});
console.log('Messages ready!');
//Welcome & goodbye messages end\\
