import React from "react";
import {ActivityIndicator, Text, TouchableWithoutFeedback, View} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Image} from "react-native-elements";
import Moment from 'moment';
import {connect} from 'react-redux';
import {callApiAlbumRequest} from "../../actions/ApiRequestActions";
import {Icon} from "native-base";


class AlbumPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            album: {},
            isLoading: false,
        }
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({isLoading: nextProps.isLoading});

        if (nextProps.data) {
            this.setState({album: nextProps.data});
        }
    }

    render() {
        let releaseDate = Moment(this.state.album.release_date).format('MMM Do YYYY');
        const isLoading = this.state.isLoading;

        return (
            <View>
                {isLoading && (
                    <ActivityIndicator
                        style={[styles.loading, {height: 180}]}
                        size="large"
                    />
                )}

                {!isLoading && (
                    <View>
                        <View style={styles.wrapper}>
                            <Grid>
                                <Row>
                                    <Col style={styles.imageWrapper}>
                                        <View>
                                            <Image
                                                style={styles.cover}
                                                source={{uri: this.state.album.image}}
                                                PlaceholderContent={<ActivityIndicator/>}
                                            />
                                        </View>
                                    </Col>
                                    <Col style={styles.textWrapper}>
                                        <Text numberOfLines={2}  style={styles.titleAlbum}>{this.state.album.name}</Text>
                                        < TouchableWithoutFeedback
                                            onPress={() => this.props.navigation.push('Band', {
                                                bandName: this.state.album.band_name,
                                                bandId: this.state.album.band_id
                                            })}>
                                            <Row style={{ height: 20 }}>
                                                <Col size={3}>
                                                    <Text numberOfLines={1}>
                                                        <Text
                                                            style={styles.text}>Band: {this.state.album.band_name}</Text>
                                                    </Text>
                                                </Col>
                                                <Col size={1}>
                                                    <Icon style={styles.iconLink} type='FontAwesome5'
                                                          name='angle-right'/>
                                                </Col>
                                            </Row>
                                        </TouchableWithoutFeedback>

                                        <Text style={styles.text}>Release date: {releaseDate}</Text>
                                        <Text style={styles.text}>Total
                                            time: {this.state.album.total_time}</Text>
                                        <Text style={styles.text}>Type: {this.state.album.type}</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.ApiAlbumReducer.isLoading,
    error: state.ApiAlbumReducer.error,
    data: state.ApiAlbumReducer.data
});

export default connect(mapStateToProps)(AlbumPanel)

const styles = {
    wrapper: {
        height: 150,
        backgroundColor: 'rgba(18, 33, 57,0.8)',
    },
    imageWrapper: {
        width: 150,
    },
    cover: {
        width: 150, height: 150
    },
    text: {
        color: "#fff",
    },
    titleAlbum: {
        fontSize: 18,
        textAlign: 'center',
        color: "#fff",
        marginBottom: 5,
    },
    textWrapper: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 5,
    },
    iconLink: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
};