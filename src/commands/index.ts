import {TestCommand} from "./test";
import {TestArgsCommand} from "./testArgs";


export const AllCommands = [
    TestCommand,
    TestArgsCommand,
];

export const Commands = new Map(AllCommands.map((cmd) => [cmd.name, cmd]));
