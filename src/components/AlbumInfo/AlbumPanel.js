import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Image} from "react-native-elements";
import Title from "../Title";
import Moment from 'moment';
import {connect} from 'react-redux';
import {callApiAlbumRequest} from "../../actions/ApiRequestActions";

class AlbumPanel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            album: {},
            isLoading: false,
        }
    }

    componentDidMount(): void {
        this.props.callApi(1);
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({isLoading: nextProps.isLoading});

        if(nextProps.data){
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
                        <Title text={this.state.album.band_name}/>
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
                                    <Col>
                                        <View style={styles.textWrapper}>
                                            <Text style={styles.text}>Album: {this.state.album.name}</Text>
                                            <Text style={styles.text}>Release date: {releaseDate}</Text>
                                            <Text style={styles.text}>Total time: {this.state.album.total_time}</Text>
                                            <Text style={styles.text}>Type: {this.state.album.type}</Text>
                                        </View>
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

export default connect(mapStateToProps, {callApi: callApiAlbumRequest})(AlbumPanel)

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