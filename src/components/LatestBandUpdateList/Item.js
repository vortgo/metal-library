import React from "react";
import {Button, ScrollView, Text, View} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class Item extends React.Component {
    render(){
        return (
            <View style={styles.item}>
                <Grid>
                    <Row>
                        <Col size={2}>
                            <Text numberOfLines={1} style={styles.text}>{this.props.title}</Text>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.text}>{this.props.date}</Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
        )
    }
}

const styles = {
    item: {
        backgroundColor: "#151d2a",
        marginBottom: 10,
        padding: 10,
    },
    text: {
        fontSize: 16,
        color: '#fff',
    }
};