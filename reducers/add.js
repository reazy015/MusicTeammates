export default function add(new_state, action)
    {
        // set the user id
        const id = action.id ? action.id : Math.floor(Math.random() * (9999 - 1000 +1)) + 1000;

        // add the user
        new_state.list.push({
            id: id,
            username: action.username,
            instrumetn: action.instrument,
        });
        return new_state;
    }