import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TextInput } from 'react-native';

class Input extends Component {

	static propTypes = {
		password: PropTypes.bool,
		placeholder: PropTypes.string,
		onChange: PropTypes.func.isRequired
	}

    render () {
		var p = this.props;
        return (
            <View style={[ styles.container, p.style ]}>
                <TextInput ref="input"
                    style={styles.input}
                    keyboardType={p.keyboardType || 'default'}
                    value={p.value}
                    onKeyPress={p.onKeyPress}
                    onChangeText={p.onChange}
                    placeholder={p.placeholder}
					autoCapitalize={p.autoCapitalize || 'none'}
                    secureTextEntry={p.password || false}
                    onSubmitEditing={p.onSubmitEditing} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    },
    input: {
        fontSize: 18,
        marginBottom: 10,
		backgroundColor: '#FFF',
		paddingHorizontal: 15,
		paddingVertical: 12,
		color: '#333',
		borderRadius: 5
    }
});

export default Input;
