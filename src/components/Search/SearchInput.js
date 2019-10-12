import {View, Keyboard} from "react-native";
import {Button, Icon, Input, Item} from "native-base";
import React, {Component} from 'react'
import {Col, Row, Grid} from 'react-native-easy-grid';
import {connect} from "react-redux";
import {callApiSearchRequest} from "../../actions/ApiRequestActions";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <Row style={{height: 70}}>
                <Col size={4} style={{}}>
                    <View style={styles.searchBlockWrapper}>
                        <Item style={{backgroundColor: 'rgba(18, 33, 57,0.7)'}}>
                            <Input placeholder='Search band, album, song'
                                   placeholderTextColor="grey"
                                   style={{color: "#fff",}}
                                   onChangeText={(text) => this.setState({text})}
                                   value={this.state.text}
                            />
                        </Item>
                    </View>
                </Col>
                <Col size={1} style={styles.buttonWrapper}>
                    <Button icon style={styles.searchButton} onPress={()=>{
                        Keyboard.dismiss();
                        this.props.callApi(this.state.text)
                        this.setState({
                            text: ''
                        })
                    }}>
                        <Icon name='search'/>
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default connect(null, {callApi: callApiSearchRequest})(SearchInput);

const styles = {
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        marginLeft: 15
    },
    searchBlockWrapper:{
        width: '100%', flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
