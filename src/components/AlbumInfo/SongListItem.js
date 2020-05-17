import React from "react";
import {Col, Grid, Row} from "react-native-easy-grid";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {Icon} from "native-base";
import { withNavigation } from 'react-navigation';

class SongListItem extends React.Component {
    render() {
        return (
            <View style={styles.item}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.push('Song', {
                    songId: this.props.id,
                })}>
                <Grid>
                    <Row>
                        <Col size={3}>
                            <Text numberOfLines={1}
                                  style={styles.text}> {this.props.position} {this.props.name} {this.props.time}
                            </Text>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.textLyrics}>
                                <Icon style={styles.icon} type='FontAwesome5'
                                      name='angle-right'/>
                            </Text>
                        </Col>
                    </Row>
                </Grid>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default withNavigation(SongListItem)

const styles = {
    icon: {
        fontSize: 16,
        color: "#fff"
    },
    text: {
        color: "#fff",
        fontSize: 16
    },
    item: {
        backgroundColor: "#151d2a",
        padding: 8,
        paddingRight: 0,
        marginTop: 7,
    },
    textLyrics: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
};