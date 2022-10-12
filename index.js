//bot that does nothing useful

const { token } = require('./config.json');
const Discord = require("discord.js");
const fs = require("fs");

//might change later
const PREFIX = "!";


const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
})


//runs code once
client.once('ready', () => {
	console.log('BOT ONLINE!');
});



// command handling
client.commands = new Discord.Collection()
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
for(file of commands) {
    const commandName = file.split(".")[0]
    //console.log(commandName);
    const command = require(`./commands/${commandName}`)
    client.commands.set(commandName, command)
}

//listening for commands
client.on("messageCreate", async message => {
if(message.author.bot) return
if(message.content.startsWith(PREFIX)) {
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g)
    //console.log(args);
    const commandName = args.shift()
    //console.log(commandName);
    //console.log(args);
    const command = client.commands.get(commandName)
    if(!command) return
    command.run(client, message, args)
}
})


// login to Discord
client.login(token);
