import { world, system, Player } from "@minecraft/server";
import { musics } from "../../system/music/info";
import { song1 } from "../../system/music/Song1";
import { pitches } from "../../system/music/notes";
/**
 * 
 * @param {Number} track 
 * @param {Player} sender 
 */
export function playMusic(track, sender){
    /**
     * @type {song1}
     */
    let note = musics[track].note;
    let len = note.length - 1;
    let count = 0;

    let runid = system.runInterval(()=>{

        if(count >= len){
            system.clearRun(runid);
        }

        note[count].forEach(sound=>{
            let type = sound.type;
            let pitch = pitches[sound.pitch].key;

            sender.runCommandAsync(`execute as @a at @s run playsound note.${type} @s ~ ~ ~ 1 ${pitch}`)
        })
        count++;
    },1)
}