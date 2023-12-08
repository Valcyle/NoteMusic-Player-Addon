import { Player, system } from "@minecraft/server";
import { timeConvert } from "../../utils/time";
import { playTime } from "../../utils/musicPlayer/playTime";
import { musics } from "../music/info";
import { prefix } from "../CommandHandler";
import { playMusic } from "../../utils/musicPlayer/playerCore";
/**
 * 
 * @param {Player} sender 
 * @param {String[]} options 
 */

export function musicPlayer(sender, options){
    let select;
    let music;
    let title;
    let length;

    if(options[1] == undefined){
        sender.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§cUsage: ${prefix}play [track number]"}]}`);
        return;
    }else{
        select = options[1];
    }
    
    if(musics[select] == undefined){
        sender.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§cThis number of track does not exist!\nPlease select the valid number"}]}`);
        return;
    }else{
        music = musics[select];
    }

    title = music.title;
    length = music.length;
    sender.runCommandAsync(`tellraw @s {"rawtext":[{"text":"§aStarting play music - ${title}"}]}`);
        
    playTime(title, length, sender);
    playMusic(select, sender);
}