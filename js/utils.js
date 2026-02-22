// Re-hydration

// loop through the parsed data and run it through e.g; new Running() again as data is dumb in local Storage
// a plain object we got from localStorage by parsing which has no methods
import { Running, Cycling, Gym } from "./activity.js";


export function rehydration(workArray) {

   const arrayOfObj = workArray.map(obj => {
        if( obj.type === 'Running') return new Running(obj.duration, obj.dist, obj.id);

        if(obj.type === 'Cycling') return new Cycling(obj.duration, obj.dist, obj.id);

        if(obj.type === 'Gym') return new Gym(obj.duration, obj.dist, obj.id);
    })

    return arrayOfObj;
}