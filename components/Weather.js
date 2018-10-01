import React from 'react';
import Forecast from './Forecast';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                zipCode: this.props.zipCode, main: 'Main', description: 'description', temp: 0
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
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }


    render() {
        return (

            <ImageBackground source={require('./back_g.jpg')} style={styles.backdrop}>
                <Forecast {...this.state.forecast} />
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create(
    {
        container: { paddingTop: 100 }, backdrop: { width: '100%', height: '100%' },
    }
);