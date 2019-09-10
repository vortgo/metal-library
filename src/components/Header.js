import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Title, Icon} from 'native-base';

export default class HeaderTitleExample extends Component {
    render() {
        return (
            <Header style={{
                borderBottomColor: '#414047',
                borderBottomWidth: 1
            }}>
                <Left style={{ flex: 1}}>
                    <Icon type='FontAwesome5' name='headphones-alt' style={style.icon}/>
                </Left>
                <Body style={{alignItems: "flex-start", flex: 5}}>
                    <Title style={{textAlign: "left", fontSize: 18}}>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
}

const style = {
    icon: {
        color: 'white',
        marginLeft: 10,
    }
};