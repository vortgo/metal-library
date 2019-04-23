import React, {Component} from 'react'
import {ImageBackground} from 'react-native';
import Header from '../components/Header'
import {Container} from 'native-base'

class CommonPageContainer extends Component {
    render() {
        const {children, ...props} = this.props;

        return (
            <Container>
                <ImageBackground source={require('../resources/img/72859.jpg')} style={{width: '100%', height: '100%'}}>
                    <Header title={this.props.headerTitle}/>
                    {children}
                </ImageBackground>
            </Container>
        )
    }

    static defaultProps = {
        headerTitle: "Secondary",
    }
}

module.exports = CommonPageContainer;