import React from 'react';

import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Forecast from './Forecast'



export default class Weather extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            forecast: {

                zipcode: this.props.zipCode, main: 'Main', description: 'Description', temp: 0

            }

        }

    }
    fetchData = () => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=59e1361f51834488d5d724d1940839c1`)

            .then((response) => response.json())

            .then((json) => {

                this.setState(

                    {

                        forecast: {

                            zipcode: this.props.zipCode,

                            main: json.weather[0].main,

                            description: json.weather[0].description,

                            temp: json.main.temp

                        }

                    });

            })

            .catch((error) => {

                console.warn(error);

            });

    }
    componentDidMount = () => this.fetchData()

    render() {

        return (

            <View style={styles.container}>



                <ImageBackground source={require('./back_g.jpg')} style={styles.backdrop}>

                    <Forecast {...this.state.forecast} />

                </ImageBackground>

            </View>

        );

    }

}

const styles = StyleSheet.create({

    container: { paddingTop: 25 },

    backdrop: { width: '100%', height: '100%' },

});