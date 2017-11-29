import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import User from 'app/redux/modules/User';
import Input from 'components/form/Input';
import ConfirmButton from 'components/buttons/Confirm';

export default class Login extends Component {

	constructor (props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	emailChanged = (email) => {
		this.setState({
			email: email
		});
	}

	passwordChanged = (password) => {
		this.setState({
			password: password
		});
	}

	render () {
		return (
			<KeyboardAwareScrollView
				keyboardDismissMode="interactive"
				contentContainerStyle={styles.container}>
				<Text style={styles.login}>
					Welcome,
					please log in
				</Text>
				<Input placeholder="e-mail"
					onChange={this.emailChanged}/>
				<Input placeholder="password"
					password
					onChange={this.passwordChanged}/>
				<ConfirmButton
					onPress={User.logIn}
					text="Log in"/>
			</KeyboardAwareScrollView>
		)
	}

}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#39F',
		paddingHorizontal: 30
	},
	login: {
		fontSize: 24,
		color: '#FFF',
		marginBottom: 30
	}
});
