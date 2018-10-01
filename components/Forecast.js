import React from 'react';
import { Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style = {{flex:1 , flexDirection: 'column' , justifyContent: 'flex-start' , alignItems: 'center' }}>
                <Text>{"\n"}Zip Code Is : {this.props.zipCode}</Text>
                <Text>{this.props.main}</Text>
                <Text>{this.props.description}</Text>
                <Text>{this.props.temp}</Text>
                <Text>°C</Text>
                <View style = {{flex:1 , flexDirection : 'column' , justifyContent:'flex-end' , alignItems : 'flex-end' }}>
                    <Text style = {{fontSize:10 , color:'red'}}>มูฮำหมัดซอรีน  หะแว  5935512045</Text>
                </View>
            </View>
        );
    }
}
