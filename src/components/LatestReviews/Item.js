import React from "react";
import {ActivityIndicator, TouchableWithoutFeedback, Text, View, Button} from "react-native";
import {Image} from "react-native-elements";
import {Col, Grid, Row} from "react-native-easy-grid";
import {Icon} from "native-base";
import Title from "../Title";

export default class Item extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                < TouchableWithoutFeedback onPress={() => this.props.navigation.push('Review', {
                    reviewId: this.props.item.id,
                })}>
                <Grid>
                    <Row>
                        <Col style={styles.imageWrapper}>
                            <View>
                                <Image
                                    source={{uri: this.props.item.album_image}}
                                    style={styles.image}
                                    PlaceholderContent={<ActivityIndicator/>}
                                />
                            </View>
                        </Col>
                        <Col style={styles.textReviewWrapper}>
                            <Title numberOfLines={2} style={styles.title}
                                   text={this.props.item.title}/>
                            <Text numberOfLines={1} style={styles.text}>Band: {this.props.item.band_name}</Text>
                            <Text numberOfLines={1} style={styles.text}>Album: {this.props.item.album_name}</Text>
                            <Text numberOfLines={1} style={styles.text}>Rating: {this.props.item.rating}%</Text>
                            <Text numberOfLines={1} style={styles.text}>Author: {this.props.item.author}</Text>
                        </Col>
                    </Row>
                </Grid>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = {
    title: {
        fontSize: 14,
        textAlign: 'center',
        color: "#fff",
        margin: 2
    },
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: 110,
        height: 110
    },
    imageWrapper: {width: 110},
    text: {
        fontSize: 12,
        color: "#fff",
    },
    textReviewWrapper: {paddingLeft: 5, paddingRight: 5, backgroundColor: 'rgba(18, 33, 57,0.8)'}
};