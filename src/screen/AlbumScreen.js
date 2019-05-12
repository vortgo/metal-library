import React from "react";
import {ScrollView, Text, View} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";
import AlbumPanel from "../components/AlbumInfo/AlbumPanel";
import SongsList from "../components/AlbumInfo/SongsList";

export default class AlbumScreen extends React.Component {
    render() {
        let {navigation} = this.props;
        let albumName = navigation.getParam('albumName', 'albumsNameDefault');
        let albumImage = navigation.getParam('albumImage', 'albumImageDefault');

        return (
            <CommonPageContainer
                headerTitle={"Album: " + albumName}
            >
                <ScrollView>
                    <AlbumPanel album={data}/>
                    <SongsList album={data}/>
                </ScrollView>
            </CommonPageContainer>
        );
    }
}

const data = {
    "id": 19100,
    "band_id": 6282,
    "type": "Demo",
    "name": "Clairvoyant Dreams",
    "year": 2005,
    "release_date": "2005-01-01T00:00:00Z",
    "label": "CD",
    "image": "https://www.metal-archives.com/images/7/8/1/1/78112.JPG",
    "total_time": "27:56",
    "band": {
        "id": 6282,
        "name": "Anthropomancy",
        "country": "",
        "formed_in": 2001,
        "label": "",
        "description": "A second full-length, Siren of Darkness, was written and partially recorded. It remains unfinished.",
        "image_logo": "https://www.metal-archives.com/images/3/6/6/4/36641_logo.jpg?2504",
        "image_band": "https://www.metal-archives.com/images/3/6/6/4/36641_photo.JPG",
        "genres": null,
        "lyrical_theme": null
    }
};