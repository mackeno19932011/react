import axios from 'axios';

function updateUserInfo(email, password) {
    return {
        type: 'UPDATE_USER_INFO',
        email: email,
        password: password,
    }
};

export function loginSubmit(dispatch, email, password) {
    if (email==='duykhanh19932011@gmail.com' && password==='12345') {
        dispatch(updateUserInfo(email, password));
    }
};

export function logoutSubmit(dispatch) {
    dispatch(updateLogoutUserInfor());
};

function updateLogoutUserInfor() {
    return {
        type: 'UPDATE_LOGOUT_USER_INFO',
    }
};