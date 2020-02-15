import React, {Component} from 'react'
import {ImageBackground} from 'react-native';
import Header from '../components/Header'
import {Container} from 'native-base'
import StyleContainer from './StyleContainer';

class CommonPageContainer extends Component {
    render() {
        let children = this.props.children;
        return (
            <StyleContainer>
                <Container>
                    <ImageBackground source={require('../resources/img/20.jpg')}
                                     style={{width: '100%', height: '100%'}}>
                        {this.props.showHeader &&
                        <Header title={this.props.headerTitle}/>
                        }
                        {children}
                    </ImageBackground>
                </Container>
            </StyleContainer>
        )
    }

    static defaultProps = {
        headerTitle: "Secondary",
        showHeader: true,
    }
}

module.exports = CommonPageContainer;