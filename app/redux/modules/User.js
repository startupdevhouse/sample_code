import store from 'app/redux/store';
import { createConstants } from 'app/redux/helpers';

const c = createConstants('User', [
	'USER_LOGIN'
]);

const initialState = {
	loggedIn: false
}

export function userReducer (state = initialState, action = {}) {

    switch (action.type) {

        case c.USER_LOGIN:
            return Object.assign({}, state, {
				loggedIn: true
			});

    }

	return state;
}

export default {
    logIn: function (email, password) {
        store.dispatch({
            type: c.USER_LOGIN,
			email: email,
			password: password
        });
    }
}
