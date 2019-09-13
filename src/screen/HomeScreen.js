import React from "react";
import {RefreshControl, ScrollView} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer"
import Title from '../components/Title'
import UpcomingAlbumList from "../components/UpcomingAlbumList/UpcomingAlbumList";
import LatestBandUpdateList from "../components/LatestBandUpdateList/LatestBandUpdateList";
import {connect} from "react-redux";
import {callApiUpcomingAlbumsRequest, callApiLatestBandsUpdateRequest} from "../actions/ApiRequestActions";
import {Footer} from "native-base";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    _onRefresh = () => {
        this.props.callApiUpcomingAlbumsRequest();
        this.props.callApiLatestBandsUpdateRequest();
    };

    componentWillReceiveProps(nextProps): void {
        if(!nextProps.loadingUpcomingAlbums && !nextProps.loadingLatestBandsUpdate){
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
                    <Title text={"Upcoming albums"}/>
                    <UpcomingAlbumList {...this.props}
                       />
                    <Title text={"Latest bands update"}/>
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
