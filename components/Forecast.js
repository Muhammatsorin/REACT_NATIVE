import React from 'react';

import { Text, View,StyleSheet } from 'react-native';



export default class Forecast extends React.Component {

    render() { 

        return (

        <View style={{flex:1,flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>                 

            <Text>{this.props.zipcode}Zip Code is.</Text>

            <Text>{this.props.main}</Text>                 

            <Text>{this.props.description}</Text>                 

            <Text>{this.props.temp}</Text>                 

            <Text>°C</Text>             

        </View>

        ); 

    }

}
