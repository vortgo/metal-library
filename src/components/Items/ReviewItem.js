import React, {Component} from 'react'
import {Image} from "react-native-elements";
import {
    Text,
    View,
    ActivityIndicator,
    TouchableWithoutFeedback
} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Icon} from "native-base";

export default class ReviewItem extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Grid>
                    <Row>
                        < TouchableWithoutFeedback onPress={() => this.props.navigation.push('Review', {
                            reviewId: this.props.review.id,
                        })}>
                            <Row>
                                <Col size={8}>
                                    <Text numberOfLines={1}>
                                        <Text
                                            style={styles.text}>{this.props.review.title} - {this.props.review.rating}%</Text>
                                    </Text>
                                    <Text style={styles.additionalInfoText}>
                                        {this.props.review.author} {this.props.review.album_name != null &&
                                        <Text style={styles.additionalInfoText}>
                                             about {this.props.review.album_name}
                                        </Text>
                                        }
                                    </Text>
                                </Col>
                                <Col size={1}>
                                    <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Icon style={styles.iconLink} type='FontAwesome5'
                                              name='angle-right'/>
                                    </View>
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
    textBold: {
        color: '#fff',
        fontWeight: 'bold',
    },
    text: {
        color: '#fff',
        width: '50%'
    },
    item: {
        backgroundColor: "#151d2a",
        padding: 8,
        paddingRight: 0,
        marginTop: 7,
    },
    iconLink: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
    additionalInfoText: {
        color: '#807e7e',
        fontSize: 10,
    },
};