import {Command} from "utils/types/Command";


export const Commands = new Map<string, Command>();

export function registerCommand(cmd: Command) {
    Commands.set(cmd.name, cmd);
}
