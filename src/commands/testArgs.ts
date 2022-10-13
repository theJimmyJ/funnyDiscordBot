import {Command} from "utils/types/Command";
import {registerCommand} from ".";


export const TestArgsCommand: Command = {
    run: (client, msg, args) => {
        for (const arg in args) {
            msg.channel.send(arg)
        }
    },
    name: "testArgs",
};
registerCommand(TestArgsCommand);
