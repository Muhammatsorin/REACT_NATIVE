import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import Weather from './Weather';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style = {styles.title}>Weather</Text>),
            headerRight: (
                <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}
                />
            )
        }
    }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode} />);
    }

}
const styles = StyleSheet.create (
    title : {fontSize : 30 , color : 'red'} , 
);