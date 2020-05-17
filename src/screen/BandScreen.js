import React from "react";
import CommonPageContainer from "../components/CommonPageContainer";
import BandInfo from "../components/BandInfo/BandInfo";

class BandScreen extends React.Component {
    render() {
        return (
            <CommonPageContainer
                headerTitle={this.props.navigation.getParam("bandName",'Band')}>
                <BandInfo navigation={this.props.navigation}/>
            </CommonPageContainer>
        );
    }
}

export default BandScreen