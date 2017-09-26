import _ from 'underscore';

function submit(email, password) {
	if (email==='duykhanh19932011@gmail.com' && password==='12345') {
		return true;
	}

	return false;
}

export default function loginReducer(state=[], action) {
    var nextState = _.clone(state);

    switch (action.type) {
        case 'LOGIN_SUBMIT':
            if (submit(action.email, action.password)) {
                return {
                    authenticate: true
                };
            } else {
                return {
                    authenticate: false
                }
            }
                
        case 'LOGOUT':
            return {
                authenticate: false
            };
        default:
            return state;
    }

    return nextState;
}