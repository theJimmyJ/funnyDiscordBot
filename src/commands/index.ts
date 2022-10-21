import {TestCommand} from "./test";
import {TestArgsCommand} from "./testArgs";
import {ShirleyCommand} from "./shirley";


export const AllCommands = [
    TestCommand,
    TestArgsCommand,
    ShirleyCommand
];

export const Commands = new Map(AllCommands.map((cmd) => [cmd.name, cmd]));
