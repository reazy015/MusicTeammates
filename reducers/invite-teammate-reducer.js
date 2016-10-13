export default function (state=null, action) {
	switch(action.type) {
		case "SEND_TEAMMATE_INVITE":
		 	return action.payload;
			break;
	}
	return state;
}