import {Command} from "utils/types/Command";
import {registerCommand} from ".";


export const TestCommand: Command = {
    run: (client, msg, args) => {
        msg.channel.send("it works");
    },
    name: "test",
};
registerCommand(TestCommand);
