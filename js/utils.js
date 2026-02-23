// Re-hydration

// loop through the parsed data and run it through e.g; new Running() again as data is dumb in local Storage
// a plain object we got from localStorage by parsing which has no methods
import { Running, Cycling, Gym, Swimming, JumpingRope, CustomActivity } from "./activity.js";


export function rehydration(workArray) {

   const arrayOfObj = workArray.map(obj => {

        if(!obj) return null;

        if( obj.type === 'Running') return new Running(obj.dist, obj.duration, obj.id, obj.date, obj.isFinished, obj.isNotCompleted);

        if(obj.type === 'Cycling') return new Cycling(obj.dist,obj.duration, obj.id, obj.date, obj.isFinished, obj.isNotCompleted);

        if(obj.type === 'Gym') return new Gym(obj.duration, obj.id, obj.date, obj.isFinished, obj.isNotCompleted);

        if(obj.type === 'Swimming') return new Swimming(obj.duration, obj.id, obj.date, obj.isFinished, obj.isNotCompleted);

        if(obj.type === 'Jumping-rope') return new JumpingRope(obj.duration, obj.id, obj.date, obj.isFinished, obj.isNotCompleted);


        return new CustomActivity(obj.duration, obj.type, obj.id, obj.date, obj.isFinished, obj.isNotCompleted);
    })

    return arrayOfObj;
}