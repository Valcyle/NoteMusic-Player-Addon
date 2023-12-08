import { Player, system } from "@minecraft/server";
import { timeConvert } from "../../utils/time";

/**
 * 
 * @param {String} title 
 * @param {Number} length 
 * @param {Player} sender 
 */
export function playTime(title, length, sender){
    let len = timeConvert(length);
    let current = 0;
    let currentConv;
    let tick = 0;

    let runid = system.runInterval(()=>{
            if(tick < 20){
                tick++;
            }else{
                tick = 0;
                current++;
            }

        currentConv = timeConvert(current);
        sender.runCommandAsync(`title @s actionbar §aNow playing : ${title} - ${currentConv[0]}:${currentConv[1]}/${len[0]}:${len[1]}`);
        if(current >= length){
            system.clearRun(runid);
        }
    },1)
}