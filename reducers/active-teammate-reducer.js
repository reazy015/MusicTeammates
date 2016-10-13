export default function (state=null, action) {
	switch(action.type) {
		case "SHOW_TEAMMATE_INFO":
		 	return action.payload;
			break;
	}
	return state;
}