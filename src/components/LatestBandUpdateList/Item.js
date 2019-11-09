import React from "react";
import {Button, TouchableWithoutFeedback, Text, View} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import Moment from 'moment';

export default class Item extends React.Component {
    render() {
        const date = Moment(this.props.date).format('MMM D, H:mm');

        return (
            <View style={styles.item}>
                <Grid>
                    <Row>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.push('Band', {
                            bandName: this.props.title,
                            bandId: this.props.id
                        })}>
                            <Row>
                                <Col size={2}>
                                    <Text numberOfLines={1} style={styles.text}>{this.props.title}</Text>
                                </Col>
                                <Col size={1}>
                                    <Text style={styles.textDate}>{date}</Text>
                                </Col>
                            </Row>
                        </TouchableWithoutFeedback>
                    </Row>
                </Grid>
            </View>
        )
    }
}

const styles = {
    item: {
        backgroundColor: "#151d2a",
        marginBottom: 7,
        padding: 8,
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
    textDate: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'right',
    }
};