import React, {Component} from 'react'
import {ScrollView, Text, ImageBackground, FlatList, ActivityIndicator} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Tab, Tabs} from 'native-base';
import Title from "../Title";
import BandRelease from "./BandRelease";
import {connect} from "react-redux";
import {callApiBandRequest, callApiBandAlbumsRequest, callApiBandReviewsRequest} from "../../actions/ApiRequestActions";
import ReviewItem from "../Items/ReviewItem";


class BandInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            albums: [],
            reviews: [],
            isLoading: true,
        }
    }

    componentDidMount(): void {
        let bandId = this.props.navigation.getParam('bandId', 1);
        this.props.callApi(bandId);
        this.props.callApiBandAlbums(bandId);
        this.props.callApiBandReviews(bandId);
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({isLoading: nextProps.isLoading});

        if (nextProps.data) {
            this.setState({data: nextProps.data});
        }

        if (nextProps.albums) {
            this.setState({albums: nextProps.albums});
        }

        if (nextProps.reviews) {
            this.setState({reviews: nextProps.reviews});
        }
    }

    implodeArray(data) {
        let formatedGenres = [];

        for (var key in data) {
            let genre = data[key].toLowerCase();
            formatedGenres[key] = genre.charAt(0).toUpperCase() + genre.slice(1)
        }

        return formatedGenres.join(', ')
    }

    sortReleases(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    render() {
        const data = this.state.data;
        const isLoading = this.state.isLoading;
        const albums = this.state.albums;
        const reviews = this.state.reviews;

        return (
            <Grid>
                {isLoading && (
                    <Col>
                        <ActivityIndicator
                            style={[styles.loading, {height: 180}]}
                            size="large"
                        />
                    </Col>
                )}
                {!isLoading && (
                    <Col>
                        <Row size={2}>
                            <ImageBackground
                                blurRadius={5}
                                style={styles.backgroundImage}
                                source={{uri: data.image_band || data.image_logo}}
                            >
                                <ImageBackground
                                    resizeMode={'contain'}
                                    style={styles.backgroundImage}
                                    source={{uri: data.image_band || data.image_logo}}
                                >
                                    <Title text={data.name}
                                           style={{textAlign: 'left', position: 'absolute', bottom: 0, margin: 20}}/>
                                </ImageBackground>
                            </ImageBackground>
                        </Row>
                        <Row size={4}>
                            <Tabs>
                                <Tab activeTextStyle={styles.tabTextStyle} textStyle={styles.tabTextStyle} heading="Band Info" style={styles.tab}>
                                    <ScrollView showsHorizontalScrollIndicator={false}
                                                showsVerticalScrollIndicator={false}>
                                        <Grid>
                                            <Row style={styles.row}>
                                                <Col>
                                                    <Text style={styles.text}>Country of origin:</Text>
                                                </Col>
                                                <Col>
                                                    <Text style={styles.text}>{data.country}</Text>
                                                </Col>
                                            </Row>
                                            <Row style={styles.row}>
                                                <Col>
                                                    <Text style={styles.text}>Status:</Text>
                                                </Col>
                                                <Col>
                                                    <Text style={styles.text}>{data.status}</Text>
                                                </Col>
                                            </Row>
                                            <Row style={styles.row}>
                                                <Col>
                                                    <Text style={styles.text}>Formed in:</Text>
                                                </Col>
                                                <Col>
                                                    <Text style={styles.text}>{data.formed_in}</Text>
                                                </Col>
                                            </Row>
                                            <Row style={styles.row}>
                                                <Col>
                                                    <Text style={styles.text}>Genres:</Text>
                                                </Col>
                                                <Col>
                                                    <Text style={styles.text}>{this.implodeArray(data.genres)}</Text>
                                                </Col>
                                            </Row>
                                            <Row style={styles.row}>
                                                <Col>
                                                    <Text style={styles.text}>Lyrical themes:</Text>
                                                </Col>
                                                <Col>
                                                    <Text
                                                        style={styles.text}>{this.implodeArray(data.lyrical_theme)}</Text>
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </ScrollView>
                                </Tab>
                                <Tab activeTextStyle={styles.tabTextStyle}  textStyle={styles.tabTextStyle} heading="Description" style={styles.tab}>
                                    <ScrollView showsHorizontalScrollIndicator={false}
                                                showsVerticalScrollIndicator={false}>
                                        <Text style={styles.text}>{data.description}</Text>
                                    </ScrollView>
                                </Tab>
                                <Tab activeTextStyle={styles.tabTextStyle}  textStyle={styles.tabTextStyle} heading="Releases" style={styles.tab}>
                                    {albums && (
                                        <FlatList
                                            keyExtractor={(item, index) => index.toString()}
                                            data={albums.sort(this.sortReleases('-year'))}
                                            renderItem={({item: rowData}) => {
                                                return (
                                                    <BandRelease album={rowData} navigation={this.props.navigation}/>
                                                );
                                            }}
                                        />
                                    )}
                                </Tab >
                                {(reviews != undefined && reviews.length > 0)  && (
                                    <Tab activeTextStyle={styles.tabTextStyle}  textStyle={styles.tabTextStyle} heading="Reviews" style={styles.tab}>
                                        <FlatList
                                            keyExtractor={(item, index) => index.toString()}
                                            data={reviews}
                                            renderItem={({item: rowData}) => {
                                                return (
                                                    <ReviewItem review={rowData} navigation={this.props.navigation}/>
                                                );
                                            }}
                                        />
                                    </Tab>
                                )}
                            </Tabs>
                        </Row>
                    </Col>
                )}
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.ApiBandReducer.isLoading,
    error: state.ApiBandReducer.error,
    data: state.ApiBandReducer.data,

    isLoadingAlbums: state.ApiBandAlbumsReducer.isLoading,
    errorAlbums: state.ApiBandAlbumsReducer.error,
    albums: state.ApiBandAlbumsReducer.data,

    isLoadingReviews: state.ApiBandReviewsReducer.isLoading,
    errorReviews: state.ApiBandReviewsReducer.error,
    reviews: state.ApiBandReviewsReducer.data,
});

export default connect(mapStateToProps, {
    callApi: callApiBandRequest,
    callApiBandAlbums: callApiBandAlbumsRequest,
    callApiBandReviews: callApiBandReviewsRequest
})(BandInfo)

const styles = {
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    tab: {
        backgroundColor: 'rgba(18, 33, 57,0.8)',
        padding: 20,

    },
    tabTextStyle: {
      fontSize: 12,
        fontWeight: "normal",
        color: '#fff'
    },
    releasesTab: {
        backgroundColor: 'rgba(18, 33, 57,0)',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },
    text: {
        color: "#fff"
    },
    row: {
        borderBottomColor: '#151d2a',
        borderBottomWidth: 1,
        padding: 5
    },
    bandName: {
        textAlign: 'left',
        position: 'absolute',
        bottom: 0,
        margin: 20
    }
};