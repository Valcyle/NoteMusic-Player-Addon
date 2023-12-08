/**
 * @remarks convert sec to min and sec
 * @param {Number} seconds 
 * @returns {Number[]}
 */
export function timeConvert(seconds){
    let time = [0, 0];

    time[0] = Math.floor(seconds / 60);
    time[1] = Math.floor(seconds % 60);

    return time;
}