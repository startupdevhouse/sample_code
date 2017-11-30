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

	logOut = () => {
		User.logOut(this.state.email, this.state.password).then(() => {
			this.props.navigation.navigate('LogOut');
		});
	}

	render () {
		return (
			<KeyboardAwareScrollView
				keyboardDismissMode="on-drag"
				contentContainerStyle={styles.container}>
				<View>
					<Text style={[ styles.title, styles.titleGold ]}>
						AnimalsColors
					</Text>
					<Text style={styles.title}>
						Find your own soulmate
					</Text>
				</View>
				<ConfirmButton
					style={styles.button}
					onPress={this.logOut}
					text="Quit"/>
			</KeyboardAwareScrollView>
		)
	}

}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#39F',
		paddingHorizontal: 30,
		paddingTop: 15,
		paddingBottom: 30
	},
	titleGold: {
		color: 'gold',
		fontSize: 32
	},
	title: {
		fontSize: 24,
		color: '#FFF',
		marginBottom: 2,
		textAlign: 'center'
	},
	button: {
		alignSelf: 'flex-end',
		marginTop: 30,
		width: '50%'
	}
});
