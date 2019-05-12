import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Image} from "react-native-elements";
import Title from "../Title";
import Moment from 'moment';

export default class AlbumPanel extends React.Component {
    render() {
        let releaseDate = Moment(this.props.album.release_date).format('MMM Do YYYY');

        return (
            <View>
                <Title text={this.props.album.band.name}/>
                <View style={styles.wrapper}>
                    <Grid>
                        <Row>
                            <Col style={styles.imageWrapper}>
                                <View>
                                    <Image
                                        style={styles.cover}
                                        source={{uri: this.props.album.image}}
                                        PlaceholderContent={<ActivityIndicator/>}
                                    />
                                </View>
                            </Col>
                            <Col>
                                <View style={styles.textWrapper}>
                                    <Text style={styles.text}>Album: {this.props.album.name}</Text>
                                    <Text style={styles.text}>Release date: {releaseDate}</Text>
                                    <Text style={styles.text}>Total time: {this.props.album.total_time}</Text>
                                    <Text style={styles.text}>Type: {this.props.album.type}</Text>
                                </View>
                            </Col>
                        </Row>
                    </Grid>
                </View>
            </View>

        );
    }
}

const styles = {
    wrapper: {
        marginLeft: 20,
        marginRight: 20,
        height: 100,
        backgroundColor: "#151d2a",
    },
    imageWrapper: {
        width: 100,
    },
    cover: {
        width: 100, height: 100
    },
    text: {
        color: "#fff",
    },
    textWrapper: {
        paddingTop: 5,
        paddingLeft: 10,
    }
};