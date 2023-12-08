import { world } from "@minecraft/server";
import { musicPlayer } from "./commands/musicPlayer";

export let prefix = ".";

world.beforeEvents.chatSend.subscribe(event => {
    let msg = event.message;
    let cmd = msg.split(" ")[0];
    let option = msg.split(" ");
    const sender = event.sender;
    event.cancel = true;

    //help
    if(cmd == prefix + "help"){
        sender.runCommandAsync(`tellraw @s {"rawtext":[{"text":"This is help command\nIt's test"}]}`);
    }
    //test
    else if(cmd == prefix + "test"){
        sender.runCommandAsync(`tellraw @s {"rawtext":[{"text":"aaaaaaaaaa"}]}`);
    }
    else if(cmd == prefix + "play"){
        musicPlayer(sender, option);
    }
    //chat
    else{
            sender.runCommandAsync(`tellraw @a {"rawtext":[{"text":"${sender.name}: §r${msg}"}]}`);
        }
})