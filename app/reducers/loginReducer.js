
function submit(email, password) {
	if (email==='longntran@gmail.com' && password==='12345') {
		return true;
	}

	return false;
}

export default function loginReducer(state=[], action) {
    switch (action.type) {
        case 'LOGIN_SUBMIT':
            return {
                authenticate: true
            };
        default:
            return state;
    }
}