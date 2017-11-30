import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from 'app/redux/store';

import LoginScreen from 'modules/Login';
import AnimalsColors from 'modules/AnimalsColors';

var Navigation = StackNavigator({
	Login: { screen: LoginScreen },
	AnimalsColors: { screen: AnimalsColors }
}, {
	initialRouteName: 'Login',
	navigationOptions: {
		gestureResponseDistance: {
			horizontal: 125
		}
	}
});

const defaultGetStateForAction = Navigation.router.getStateForAction;

Navigation.router.getStateForAction = function (action, state) {
	console.log(action, state);
	if (action.routeName === 'LogOut') {
		const routes = [
			{ key: 'Login', routeName: 'Login', }
		];
		return {
			...state,
			routes,
			index: 0,
		};
	}
	return defaultGetStateForAction(action, state);
};


export default class Application extends Component {

	render () {
		return (
			<Provider store={store}>
				<Navigation/>
			</Provider>
		);
	}

}
