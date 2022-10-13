import type Discord from "discord.js";


export type Command = {
    run: (client: Discord.Client, msg: Discord.Message, args: string[]) => void;
    name: string;
}
