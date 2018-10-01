import React from 'react';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
import Forecast from './Forcast';

export default class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'Main', description: 'description', temp: 0
            }
        }
    }

    render() {
        return (
                <ImageBackground source={require('./back_g.jpg')} style={styles.backdrop}>                    
                    <Text>Zip code is {this.props.zipCode}.</Text>            
                    <Forecast {...this.state.forecast} />                   
                </ImageBackground>       
        );
    }
}

const styles = StyleSheet.create(
    {
        backdrop: {
            flex:1, 
            width: '100%', 
            height: '100%',
            alignItems:'center'
        }, 
    }
);