import React from 'react';

import { StyleSheet, Text, View ,ImageBackground} from 'react-native';

import Forecast from './Forecast'



export default class Weather extends React.Component {

    constructor(props) { 

        super(props); 

        this.state = { 

            forecast: { 

                zipcode: this.props.zipCode ,main: 'Main', description: 'Description', temp: 0 

            } 

        } 

    }

    render() {

        return (

            <View style={styles.container}>



                <ImageBackground source={require('./back_g.jpg')} style={styles.backdrop}>

                    <Forecast {...this.state.forecast}/>

                </ImageBackground>

            </View>

            );

    }

}

const styles = StyleSheet.create({

    container: { paddingTop: 25},

    backdrop: { width: '100%', height: '100%'},

});