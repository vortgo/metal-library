import {View} from "react-native";
import {Button, Icon, Input, Item} from "native-base";
import React, {Component} from 'react'
import {Col, Row, Grid} from 'react-native-easy-grid';
import {connect} from "react-redux";
import {decrement, increment} from "../../actions/CounterActions";

class SearchInput extends React.Component {
    render() {
        return (
            <Row style={{height: 70}}>
                <Col size={3} style={{}}>
                    <View style={styles.searchBlockWrapper}>
                        <Item style={{backgroundColor: 'rgba(18, 33, 57,0.5)'}}>
                            <Input placeholder='Search band, album, song'
                                   placeholderTextColor="grey"
                                   style={{color: "#fff",}}/>
                        </Item>
                    </View>
                </Col>
                <Col size={1} style={styles.buttonWrapper}>
                    <Button icon style={styles.searchButton} onPress={this.props.increment}>
                        <Icon name='search'/>
                    </Button>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    count: state.counterReducer.count
});

export default connect(mapStateToProps, {increment,decrement})(SearchInput);

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
