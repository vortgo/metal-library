import React, {Component} from 'react'
import {StyleProvider} from "native-base";
import getTheme from "../resources/native-base-theme/components";
import platform from "../resources/native-base-theme/variables/material";

export default class StyleContainer extends Component{
    render(){
        return (
            <StyleProvider style={getTheme(platform)}>
                {this.props.children}
            </StyleProvider>
        )
    }
}