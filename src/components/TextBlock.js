import React, {Component} from 'react'
import {Text} from "react-native";

export default class TextBlock extends Component {
    render() {
        let children = this.props.children;
        let parentStyles = this.props.style || {};
        let obj = style.text;

        let tempObj = {};
        for(let i in obj){
            tempObj[i] = obj[i];
        }
        obj = tempObj;

        let selfStyles = Object.assign(obj, parentStyles);

        return (
            <Text style={selfStyles}>{children}</Text>

        )
    }
}

const style = {
    text: {
        color: '#fff',
        fontSize: 14,
    }
}