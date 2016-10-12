export default function teammates(state={}, action) {
	let new_state;

	switch(action.type){
		case "TEAMMATE_INVITE_SHOW":
			new_state = JSON.parse(JSON.stringify(state));
			new_state.modal = new_state.modal ? new_state.modal : {};
			new_state.modal.list_invite = {
				show: true,
				id: action.id,
				name: action.teammate_name,
			}
			return new_state;
		default:
			return state;
	}
}