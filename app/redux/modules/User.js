import Q from 'q';

import store from 'app/redux/store';
import { createConstants } from 'app/redux/helpers';

const c = createConstants('User', [
	'USER_LOGIN',
	'USER_LOGOUT'
]);

const initialState = {
	loggedIn: false,
	data: {}
}

export function userReducer (state = initialState, action = {}) {

    switch (action.type) {

        case c.USER_LOGIN:
            return Object.assign({}, state, {
				loggedIn: true,
				data: {
					email: action.email
				}
			});

		case c.USER_LOGOUT:
			return Object.assign({}, state, {
				loggedIn: false
			});

    }

	return state;
}

var accounts = [
	{
		email: 'test@test.pl',
		password: 'test'
	}
]

export default {
    logIn: function (email, password) {
		var deferred = Q.defer();

		if (accounts.some(function (credentials) {
			return credentials.email === email && credentials.password === password;
		})) {
	        store.dispatch({
	            type: c.USER_LOGIN,
				email: email
	        });
			deferred.resolve();
		} else {
			deferred.reject();
		}

		return deferred.promise;
    },

	logOut: function () {
		return new Promise(function (resolve, reject) {
			store.dispatch({
				type: c.USER_LOGOUT
			});
			resolve();
		});
	}
}
