import {Command} from "utils/types/Command";


export const TestArgsCommand: Command = {
    run: (client, msg, args) => {
        for (const arg in args) {
            msg.channel.send(args[arg])
        }
    },
    name: "testArgs",
};
