
export default function loginSubmit(email, password) {
    return {
        type: 'LOGIN_SUBMIT',
        email: email,
        password: password
    }
}