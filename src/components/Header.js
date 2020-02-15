import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Title, Icon, Button} from 'native-base';
import { withNavigation } from 'react-navigation';

class HeaderComponent extends Component {
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
                <Right>
                    <Icon type='FontAwesome5' name='list' style={style.menu_icon}  onPress={() => this.props.navigation.toggleDrawer()}/>
                </Right>
            </Header>
        );
    }
}

const style = {
    icon: {
        color: 'white',
        marginLeft: 10,
    },
    menu_icon: {
        color: 'white',
        fontSize: 20
    }
};

export default  withNavigation(HeaderComponent);