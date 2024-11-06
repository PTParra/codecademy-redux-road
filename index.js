/*
    Redux Road
    Now that we have a solid understanding of Redux’s core concepts, it’s time to put them into practice.

    In this project, your objective is to create a text-based adventure game using reducers, state, and actions.
    The state will serve as a reflection of the game’s current status, encompassing elements such as the player’s
    inventory, distance covered, and time spent on the journey. Each occurrence within the game will be depicted as
    an action, allowing players to collect supplies, embark on travels, and occasionally, if they dare, encounter
    mishaps like overturning their wagon and losing their provisions.
*/

const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
}

const state = (state = initialWagonState, action) => {

    switch (action.type) {
        case 'gather':
            return {
                ...state,
                supplies: state.supplies + 15,
                days: state.days + 1
            }    
        case 'travel':
            if(state.supplies - (20 * action.payload) < 0){
                return state;
            }
            return {
                supplies: state.supplies - (20 * action.payload),
                distance: state.distance + (10 * action.payload),
                days: state.days + action.payload
            }    
        case 'tippedWagon':
            return {
                ...state,
                supplies: state.supplies - 30,
                days: state.days + 1
            }    
        default:
            return state
    }
}

let wagon = state(undefined , 'travel');

console.log("\nOur adventure starts! My stats:", wagon , "\n");

wagon = state(wagon, {type: 'travel', payload: 1});

console.log("Travel time! My stats:", wagon , "\n");

wagon = state(wagon, {type: 'gather'});

console.log("Time to grab some resources! My stats:", wagon , "\n");

wagon = state(wagon, {type: 'tippedWagon'});

console.log("Going through a rushin river was a bad idea... My stats:", wagon , "\n");

wagon = state(wagon, {type: 'travel', payload: 3});

console.log("Travel time for 3 days! My stats:", wagon , "\n");

wagon = state(wagon, {type: 'travel', payload: 3});

console.log("Travel time for 3 days! Wait... i dont have resources... My stats:", wagon , "\n");