import React, {Component} from 'react'
import { Text } from "react-native";

export default class Title extends Component {
    render() {
        return (
            <Text style={style.textWithShadow}>{this.props.text}</Text>

        )
    }
}

const style = {
    textWithShadow:{
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 15
    }
}