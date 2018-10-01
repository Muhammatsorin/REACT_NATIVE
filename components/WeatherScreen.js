import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Weather from './Weather';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text style={styles.Title}>Weather</Text>),
            headerStyle: {
                backgroundColor: '#01579b' ,
            },
            
            headerRight: (
                <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}/>
            )
        }
    }

    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (

            <Weather zipCode={zipCode} />
        );
    }
}

const styles = StyleSheet.create({
    Title: { fontSize: 30, fontSize: 20, color: 'black' },
});