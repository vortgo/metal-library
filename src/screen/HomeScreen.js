import React from "react";
import {RefreshControl, ScrollView, Button} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer"
import Title from '../components/Title'
import UpcomingAlbumList from "../components/UpcomingAlbumList/UpcomingAlbumList";
import LatestBandUpdateList from "../components/LatestBandUpdateList/LatestBandUpdateList";
import {connect} from "react-redux";
import {callApiUpcomingAlbumsRequest, callApiLatestBandsUpdateRequest} from "../actions/ApiRequestActions";
import SplashScreen from "react-native-splash-screen";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    _onRefresh = () => {
        this.props.callApiUpcomingAlbumsRequest();
        this.props.callApiLatestBandsUpdateRequest();
    };

    componentWillReceiveProps(nextProps): void {
        if (!nextProps.loadingUpcomingAlbums && !nextProps.loadingLatestBandsUpdate) {
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
                    <Title text={"Top rated albums"}/>
                    <UpcomingAlbumList {...this.props}
                    />
                    <Title text={"Top rated bands"}/>
                    <LatestBandUpdateList navigation={this.props.navigation}/>
                </ScrollView>
            </CommonPageContainer>
        );
    }
}

const mapStateToProps = state => ({
    loadingUpcomingAlbums: state.ApiUpcomingAlbumsReducer.isLoading,
    loadingLatestBandsUpdate: state.ApiLatestBandsUpdateReducer.isLoading,
});


export default connect(mapStateToProps, {callApiUpcomingAlbumsRequest, callApiLatestBandsUpdateRequest})(HomeScreen);
