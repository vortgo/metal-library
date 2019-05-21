import React, {Component} from 'react'
import {ActivityIndicator, Text, View, Image, ImageBackground, Dimensions} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Tab, Tabs} from 'native-base';


export default class BandInfo extends Component {


    render() {

        const win = Dimensions.get('window');

        return (
            <Grid>
                <Row size={2}>
                    <ImageBackground
                        blurRadius={5}
                        style={styles.backgroundImage}
                        source={{uri: 'https://www.metal-archives.com/images/3/5/4/0/3540309034_photo.jpg'}}
                    >
                        <ImageBackground
                            resizeMode={'center'}
                            style={styles.backgroundImage}
                            source={{uri: 'https://www.metal-archives.com/images/3/5/4/0/3540309034_photo.jpg'}}
                        />
                    </ImageBackground>
                </Row>
                <Row size={3}>
                    <Tabs>
                        <Tab heading="Band Info" style={styles.tab}>
                            <Text>TAB1</Text>
                        </Tab>
                        <Tab heading="Description" style={styles.tab}>
                            <Text>TAB2</Text>
                        </Tab>
                        <Tab heading="Releases" style={styles.tab}>
                            <Text>TAB3</Text>
                        </Tab>
                    </Tabs>
                </Row>
            </Grid>
        )
    }
}

const styles = {
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    tab: {
        backgroundColor: 'rgb(18, 33, 57)'
    }
};

const data = {
    "id": 5026,
    "name": "Ana Kefr",
    "country": "UNITED STATES",
    "formed_in": 2008,
    "label": "PROGRESSIVE/DEATH METAL",
    "description": "Ana Kefr is Arabic for \"I Am Infidel\".",
    "image_logo": "https://www.metal-archives.com/images/3/5/4/0/3540309034_logo.jpg",
    "image_band": "https://www.metal-archives.com/images/3/5/4/0/3540309034_photo.jpg",
    "genres": [
        "PROGRESSIVE",
        "DEATH METAL"
    ],
    "lyrical_theme": [
        "ANTI-RELIGION",
        "POLITICS",
        "HUMAN RIGHTS",
        "PHILOSOPHY"
    ]
}