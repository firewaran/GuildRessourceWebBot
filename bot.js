const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	var msgParts = message.content.split(" ");
	var msgChannel = message.channel;
	
	if (msgParts[0] === 'bot') {
		switch (msgParts[1]) {
		case "ping":
			msgChannel.send('pong');
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
			msgChannel.send('Sorry dude, i don\'t understand "' + msgParts[1] + '"');		
			break;
		}
	}
});

// Login and Run the bot.
client.login(process.env.BOT_TOKEN);
