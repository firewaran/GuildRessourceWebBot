const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	var msgParts = message.split(" ");	
	
	if (msgParts[1] === 'bot') {
		switch (msgParts[2]) {
		case "ping":
			message.channel.send('pong');
			break;
		case "userConfig"
			break;
		case "credits"
			break;
		case "checkTypes"
			break;
		case "nativeStatus"
			break;
		case "info"
			break;
		case "config"
			break;
		case "total"
			break;
		case "users"
			break;		
		case "shutdown"
			break;
		case "update"
			break;		
		case "clear"
			break;
		case "check"
			break;
		case "status"
			break;
		case "help"
			break;
		default:
			message.channel.send('Sorry dude, i don\'t understand "' + msgParts[2] + '"');		
		}
	}
});

// Login and Run the bot.
client.login(process.env.BOT_TOKEN);
