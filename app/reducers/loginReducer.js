const initialState = {
    email: '',
    password: '',
    authenticate: false,
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_USER_INFO':
            return {
                email: action.email,
                password: action.password,
                authenticate: true,
            };
        case 'UPDATE_LOGOUT_USER_INFO':
            return Object.assign({}, initialState, {authenticate: false});
        default:
            return state;
    };

    return state;
};