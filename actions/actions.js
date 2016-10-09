const actions = {
	addTeammate: (name, instrument) => {
		return {
			type: "ADD_TEAMMATE",
			name,
			instrument
		}
	}
};

export default actions