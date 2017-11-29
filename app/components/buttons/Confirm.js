import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class ConfirmButton extends Component {

	static propTypes = {
		onPress: PropTypes.func.isRequired,
		text: PropTypes.string.isRequired
	}

    render() {
		var p = this.props;

        return (
            <TouchableOpacity
                onPress={p.onPress}
                style={[ styles.button, p.style ]}>
                <Text style={styles.text}>
					{p.text}
				</Text>
        	</TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gold',
        alignItems: 'center',
        paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
		color: '#FFF'
    }
});
