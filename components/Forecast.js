import React from 'react';
import { Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text>Zip Code Is : {this.props.zipCode}</Text>
                <Text>{this.props.main}</Text>
                <Text>{this.props.description}</Text>
                <Text>{this.props.temp}</Text>
                <Text>°C</Text>
            </View>
        );
    }
}