import React, {Component} from 'react'
import {Image} from "react-native-elements";
import {
    Text,
    View,
    ActivityIndicator,
    TouchableWithoutFeedback
} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class BandRelease extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Grid>
                    <Row>
                        < TouchableWithoutFeedback onPress={() => this.props.navigation.push('Album', {
                            albumId: this.props.album.id,
                            albumName: this.props.album.name
                        })}>
                            <Row>
                                <Col style={styles.imageWrap}>
                                    <Image
                                        style={styles.cover}
                                        source={{uri: this.props.album.image}}
                                        PlaceholderContent={<ActivityIndicator/>}
                                    />
                                </Col>
                                <Col style={styles.textWrap}>
                                    <Text numberOfLines={1}>
                                        <Text style={styles.textBold}>{this.props.album.name}</Text>
                                        <Text style={styles.text}> ({this.props.album.year})</Text>
                                    </Text>
                                    <Text style={styles.text}>
                                        Type: {this.props.album.type}
                                    </Text>
                                    {this.props.album.total_time ?
                                        <Text style={styles.text} numberOfLines={1}>
                                            Total time: {this.props.album.total_time}
                                        </Text> : null
                                    }
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

        marginBottom: 10,
        backgroundColor: "#151d2a",
    },
    cover: {
        width: 60,
        height: 60,
    },
    imageWrap: {
        width: 60
    },
    textWrap: {
        paddingLeft: 10
    }
}