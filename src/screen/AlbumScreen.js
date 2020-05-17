import React from "react";
import {ScrollView, FlatList, Text} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";
import AlbumPanel from "../components/AlbumInfo/AlbumPanel";
import SongsList from "../components/AlbumInfo/SongsList";
import {connect} from "react-redux";
import {callApiAlbumRequest, callApiAlbumReviewsRequest, callApiAlbumSongsRequest} from "../actions/ApiRequestActions";
import {Tab, Tabs} from 'native-base';
import ReviewItem from "../components/Items/ReviewItem";

class AlbumScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    componentDidMount(): void {
        let albumId = this.props.navigation.getParam('albumId', 1);
        this.props.callApiAlbumReviewsRequest(albumId);
        this.props.callApiAlbumRequest(albumId)
    }

    componentWillReceiveProps(nextProps): void {
        if (nextProps.reviews) {
            this.setState({reviews: nextProps.reviews});
        }
    }

    _onRefresh = () => {
        let albumId = this.props.navigation.getParam('albumId', 1);
        this.props.callApiAlbumRequest(albumId);
        this.props.callApiAlbumSongsRequest(albumId);
        this.props.callApiAlbumReviewsRequest(albumId);
        this.setState({refreshing: false})
    };

    render() {
        let {navigation} = this.props;
        let albumName = navigation.getParam('albumName', 'albumsNameDefault');
        let albumId = navigation.getParam('albumId', 1);

        const reviews = this.state.reviews;
        return (
            <CommonPageContainer
                headerTitle={"Album: " + albumName}
            >
                <AlbumPanel albumId={albumId} navigation={this.props.navigation}/>
                <Tabs>
                    <Tab activeTextStyle={styles.tabTextStyle}  textStyle={styles.tabTextStyle} heading="Songs" style={styles.tab}>
                        <ScrollView showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}>
                            <SongsList albumId={albumId}/>
                        </ScrollView>
                    </Tab>
                    <Tab activeTextStyle={styles.tabTextStyle}  textStyle={styles.tabTextStyle} heading="Reviews" style={styles.tab}>
                        {(reviews != undefined && reviews.length > 0)
                            ? <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                data={reviews}
                                renderItem={({item: rowData}) => {
                                    return (
                                        <ReviewItem review={rowData} navigation={this.props.navigation}/>
                                    );
                                }}
                            />
                            : <Text style={styles.text}>No reviews for album yet</Text>
                        }
                    </Tab>
                </Tabs>
            </CommonPageContainer>
        );
    }
}


const mapStateToProps = state => ({
    reviews: state.ApiAlbumReviewsReducer.data
});


export default connect(mapStateToProps, {
    callApiAlbumRequest,
    callApiAlbumSongsRequest,
    callApiAlbumReviewsRequest
})(AlbumScreen);

const styles = {
    tab: {
        backgroundColor: 'rgba(18, 33, 57,0.8)',
        padding: 20,
        fontSize: 10,
    },
    tabTextStyle: {
        fontSize: 12,
        fontWeight: "normal",
        color: '#fff'
    },
    row: {
        borderBottomColor: '#151d2a',
        borderBottomWidth: 1,
        padding: 5
    },
    text: {
        color: '#fff'
    }
};