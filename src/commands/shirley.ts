import {Command} from "utils/types/Command";


export const ShirleyCommand: Command = {
    run: (client, msg, args) => {
        msg.channel.send("https://tenor.com/view/paul-shirley-rpi-rensselaer-shirley-ann-jackson-gif-22992311");
    },
    name: "shirley",
};
