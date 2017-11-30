import React, { Component } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import User from 'app/redux/modules/User';
import Input from 'components/form/Input';
import ConfirmButton from 'components/buttons/Confirm';

export default class Login extends Component {

	constructor (props) {
		super(props);

		this.state = {
			error: null,
			email: 'test@test.pl',
			password: 'test'
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

	logIn = () => {
		User.logIn(this.state.email, this.state.password).then(() => {
			this.setState({
				error: null
			});
			this.props.navigation.navigate('AnimalsColors');
		}).catch(() => {
			this.setState({
				error: 'Invalid credentials'
			});
		});
	}

	render () {
		return (
			<ScrollView
				contentContainerStyle={styles.container}>
				<KeyboardAvoidingView
					keyboardDismissMode="on-drag"
					behavior="padding">
					<Text style={styles.login}>
						Welcome,
						please log in
					</Text>
					<Input placeholder="e-mail"
						value={this.state.email}
						onChange={this.emailChanged}/>
					<Input placeholder="password"
						value={this.state.password}
						password
						onChange={this.passwordChanged}/>
					{this.state.error ? (
						<Text style={styles.error}>
							{this.state.error}
						</Text>
					) : null}
					<ConfirmButton
						style={styles.button}
						onPress={this.logIn}
						text="Log in"/>
				</KeyboardAvoidingView>
			</ScrollView>
		)
	}

}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		backgroundColor: '#39F',
		paddingHorizontal: 15
	},
	login: {
		alignSelf: 'center',
		fontSize: 24,
		color: '#FFF',
		marginBottom: 30
	},
	button: {
		alignSelf: 'center',
		marginTop: 15
	},
	error: {
		color: 'red',
		fontSize: 18,
		marginTop: 15,
		marginBottom: -5,
		alignSelf: 'center'
	}
});
