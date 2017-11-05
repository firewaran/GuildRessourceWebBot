/* Required Environment Variables:
 --------
	DATABASE_URL		: The postgres storage, will be automatically set.
	
---------	
	BOT_TOKEN			: The App Bot User Token from the Discord Apps Homepage.
	
---------
    Discord.js Documentation:
    	https://discord.js.org/#/docs/main/stable/general/welcome
    	
*/

const Discord = require('discord.js');
const client = new Discord.Client();

const {postgres} = require('pg');
const db = new postgres({
	  connectionString: process.env.DATABASE_URL,
	  ssl: true,
	});

const members = require('member.js');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    // So the bot doesn't reply to iteself
    if (message.author.bot) return;	
	
    const member = new Member(message.author.id);
    
	if (msgParts[0] === 'bot') {
		switch (msgParts[1]) {
		case "ping":
			message.channel.send('pong');
			break;
		case "userConfig":		
			break;
		case "credits":
			message.channel.send('This bot is a creation of <members>\r\nCodebase:\r\nhttps://github.com/\r\nDiscord:\r\nhttps://discord.gg/');
			break;
		case "checkTypes":
			break;
		case "nativeStatus":
			break;
		case "info":
			break;
		case "config":
			break;
		case "total":
			break;
		case "users":
			break;		
		case "shutdown":
			break;
		case "update":
			break;		
		case "clear":
			break;
		case "check":
			break;
		case "status":
			break;
		case "help":
			break;
		default:
			message.channel.send('Sorry dude, i don\'t understand "' + msgParts[1] + '"');		
		}
	}
});

// Start the Bot
client.login(process.env.BOT_TOKEN);
