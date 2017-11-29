import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from 'app/redux/store';

import LoginScreen from 'modules/Login';

var Navigation = StackNavigator({
	Login: { screen: LoginScreen }
});

export default class Application extends Component {

	render () {
		return (
			<Provider store={store}>
				<Navigation/>
			</Provider>
		);
	}

}
