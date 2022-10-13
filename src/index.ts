import Discord, {GatewayIntentBits} from "discord.js";

import {PREFIX} from "Constants";

import {token} from "./data/config.json";
import {Commands} from "./commands";


// Setup client
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
client.once("ready", () => {
    console.log("BOT ONLINE!");
});
client.on("messageCreate", async (message) => {
    if (message.author.bot)
        return;

    if (message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const cmdName = args.shift();
        if (!cmdName)
            return;
        const cmd = Commands.get(cmdName);
        if (!cmd)
            return;
        cmd.run(client, message, args);
    }
});

// Log client in
client.login(token);
