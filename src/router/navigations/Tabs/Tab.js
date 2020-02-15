import React, {Component} from 'react';
import {StackActions} from 'react-navigation';
import {Text} from 'react-native';
import StyleContainer from "../../../components/StyleContainer";
import {Button, Footer, FooterTab, Icon} from "native-base";

class Tabs extends Component {
    render () {
        return (
            <StyleContainer>
                <Footer style={{
                    borderTopColor: '#414047',
                    borderTopWidth: 1
                }}>
                    <FooterTab>
                        <Button
                            vertical
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.popToTop());
                                this.props.navigation.navigate("Home");
                            }}
                        >
                            <Icon name="home"/>
                            <Text style={{color:"#fff"}}>Home</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.popToTop());
                                this.props.navigation.navigate("Search");
                            }}
                        >
                            <Icon name="search"/>
                            <Text style={{color:"#fff"}}>Search</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </StyleContainer>
        );
    }
}

export default Tabs;