import {Command} from "utils/types/Command";


export const TestCommand: Command = {
    run: (client, msg, args) => {
        msg.channel.send("it works");
    },
    name: "test",
};
