import React from "react";
import {RefreshControl, ScrollView, Button} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer"
import Title from '../components/Title'
import UpcomingAlbumList from "../components/UpcomingAlbumList/UpcomingAlbumList";
import LatestBandUpdateList from "../components/LatestBandUpdateList/LatestBandUpdateList";
import {connect} from "react-redux";
import {
    callApiUpcomingAlbumsRequest,
    callApiLatestBandsUpdateRequest,
    callApiLatestReviewsRequest
} from "../actions/ApiRequestActions";
import SplashScreen from "react-native-splash-screen";
import LatestReviews from "../components/LatestReviews/LatestReviews";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    _onRefresh = () => {
        this.props.callApiUpcomingAlbumsRequest();
        this.props.callApiLatestBandsUpdateRequest();
        this.props.callApiLatestReviewsRequest();
    };

    componentWillReceiveProps(nextProps): void {
        if (!nextProps.loadingUpcomingAlbums && !nextProps.loadingLatestBandsUpdate && !nextProps.loadingLatestReviews) {
            console.log("refreshing false")
            this.setState({refreshing: false})
        }
    }

    render() {
        return (
            <CommonPageContainer
                headerTitle="Metal Library">
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                >
                    <Title text={"Upcoming Albums"}/>
                    <UpcomingAlbumList {...this.props}/>
                    <Title text={"Latest Reviews"}/>
                    <LatestReviews {...this.props}/>
                    <Title text={"Latest Bands Update"}/>
                    <LatestBandUpdateList navigation={this.props.navigation}/>
                </ScrollView>
            </CommonPageContainer>
        );
    }
}

const mapStateToProps = state => ({
    loadingUpcomingAlbums: state.ApiUpcomingAlbumsReducer.isLoading,
    loadingLatestBandsUpdate: state.ApiLatestBandsUpdateReducer.isLoading,
    loadingLatestReviews: state.ApiLatestReviewsReducer.isLoading,
});


export default connect(mapStateToProps, {
    callApiUpcomingAlbumsRequest,
    callApiLatestBandsUpdateRequest,
    callApiLatestReviewsRequest
})(HomeScreen);
