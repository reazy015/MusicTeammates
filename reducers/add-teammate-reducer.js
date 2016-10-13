export default function (state={}, action){
    switch(action.type){
        case "ADD_TEAMMATE":  
            const id = action.id ? action.id : Math.floor(Math.random() * (9999 - 1000 +1)) + 1000;        
            
            state.initialUsers.push({
            id: id,
            username: action.username,
            instrument: action.instrument,
        });
        return state;
    }