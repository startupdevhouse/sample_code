import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

var animals = [
	{ name: 'dog '},
	{ name: 'cat' },
	{ name: 'horse' }
]

var capitalize = function (text) {
	return text[0].toUpperCase() + text.substring(1);
}

export default class AnimalsPicker extends Component {

	static propTypes = {
		onChange: PropTypes.func.isRequired
	}

	constructor (props) {
		super(props);

		this.state = {
			selectedIndex: null
		}
	}

	select = (index) => {
		var self = this;
		return function () {
			self.setState({
				selectedIndex: index
			});
			self.props.onChange(animals[index]);
		}
	}

	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					Choose an animal
				</Text>
				{animals.map((animal, index) => {
					var s = [ styles.item ];
					var s2 = [ styles.itemText ];

					if (this.state.selectedIndex === index) {
						s.push(styles.selectedItem);
						s2.push(styles.selectedItemText)
					}

					return (
						<TouchableOpacity key={index} style={s}
							onPress={this.select(index)}>
							<Text style={s2}>
								{capitalize(animal.name)}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	}

}

var styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255, 255, 255, .2)',
		padding: 15,
		borderRadius: 5
	},
	title: {
		color: 'gold',
		fontSize: 20,
		marginBottom: 15
	},
	item: {
		backgroundColor: '#FFF',
		marginTop: 10,
		padding: 5,
		borderRadius: 5
	},
	selectedItem: {
		backgroundColor: 'gold'
	},
	selectedItemText: {
		color: '#FFF'
	}
})
