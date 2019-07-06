import React from "react";
import {ScrollView, View} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import CommonPageContainer from "../components/CommonPageContainer";
import SearchInput from "../components/Search/SearchInput";
import {Container, Header, Content, Input, Item, Accordion, Button, Icon, Text} from 'native-base';
import {connect} from "react-redux";
import {increment,decrement} from "../actions/CounterActions";

class SearchScreen extends React.Component {

    _renderHeader(item, expanded) {
        return (
            <View style={styles.item}>
                <Grid>
                    <Row>
                        <Col size={2}>
                            <Text numberOfLines={1} style={styles.text}> {item.name}</Text>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.textResultsCount}>
                                Results ({item.data.length})
                                Count ({item.count})
                                {expanded
                                ? <Icon style={styles.icon} type='FontAwesome5' name='chevron-up'/>
                                : <Icon style={styles.icon} type='FontAwesome5' name='chevron-down'/>}
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
        );
    }

    _renderContent(item) {
        return (
            <View style={styles.content}>
                {item.data.map((row, key) => {
                    return (
                        <View style={styles.searchResultRow} key={key}>
                            <Text style={styles.text} numberOfLines={1}>
                                {row.name} {item.data[key].name}
                            </Text>
                        </View>
                    )
                })}
            </View>

        );
    }

    render() {

        let searchResult = [
            {
                name: "Bands",
                data: data.bands,
                count: this.props.count
            },
            {
                name: "Albums",
                data: data.albums,
                count: this.props.count
            },
            {
                name: "Songs",
                data: data.songs,
                count: this.props.count
            },
        ];
        return (
            <CommonPageContainer
                headerTitle="Heavy music archive">
                <Grid style={{margin: 20}}>
                    <Row>
                        <Accordion style={styles.accordion}
                                   dataArray={searchResult}
                                   animation={true}
                                   renderHeader={this._renderHeader}
                                   renderContent={this._renderContent}
                                   expanded={0}
                        />
                    </Row>
                <SearchInput/>
                </Grid>

            </CommonPageContainer>
        );
    }
}

const mapStateToProps = state => ({
    count: state.counterReducer.count
});

export default connect(mapStateToProps, {increment,decrement})(SearchScreen);

const styles = {
    accordion: {
        borderWidth: 0,
        marginBottom: 7,
    },
    icon: {
        fontSize: 16,
        color: "#fff"
    },
    item: {
        backgroundColor: "#151d2a",
        padding: 8,
        marginTop: 7,
    },
    textResultsCount: {
        fontSize: 14,
        color: "#fff",
        textAlign: "right",
    },
    text: {
        color: '#fff',
    },
    content: {
        backgroundColor: "#122139",
        fontSize: 16,
        padding: 5,
        paddingBottom: 0,
        color: "#fff",
        fontStyle: "italic",
    },
    searchResultRow: {
        borderBottomColor: '#414047',
        borderBottomWidth: 1,
        padding: 10
    }
};


const data = {
    songs: [
        {
            "id": 1634757,
            "band_id": 94620,
            "album_id": 267828,
            "name": "Ana",
            "time": "04:11",
            "lyrics": "(lyrics not available)\n",
            "position": 2,
            "band": null,
            "album": {
                "id": 267828,
                "band_id": 94620,
                "type": "Full-length",
                "name": "Sin sacrificio no hay victoria",
                "year": 2010,
                "release_date": "2010-01-01T00:00:00Z",
                "label": "",
                "image": "https://www.metal-archives.com/images/2/9/7/3/297398.jpg",
                "total_time": "57:49",
                "band": {
                    "id": 94620,
                    "name": "Sacrificio",
                    "country": "",
                    "formed_in": 2005,
                    "label": "",
                    "description": "Not to be confused with Sacrificio from Rosario, Santa Fe, Thrash Metal band.\n\nAdd. Release:\n2007 - Promo Demo",
                    "image_logo": "https://www.metal-archives.com/images/3/5/4/0/3540322299_logo.gif",
                    "image_band": "https://www.metal-archives.com/images/3/5/4/0/3540322299_photo.jpg",
                    "genres": null,
                    "lyrical_theme": null
                }
            }
        },
        {
            "id": 1682260,
            "band_id": 97404,
            "album_id": 275630,
            "name": "Murder Ana",
            "time": "04:04",
            "lyrics": "Looks in mirrors show her obesity. Can't stand herself. As sad as she can be. Friends back stabbed, parents fight every night, religiously. Only substance she can control, is what she eats.\n\nBones enclosed in a pale shell. She lives in hell. Her skin grows pale. Her organs fail. She can't feel heat. She will not eat. Her father yells, her mother wails, her siblings cry. She wants to die.\n\nBones enclosed in a pallid shell. She lives in hell. She created this herself. She starves herself.\n\nI reach out my hands and there is no warmth left to greet. No tears left inside her eyes. Her purpose is concrete. She will starve herself until there is surely nothing left, and when she dies she will smile a smile of success.\n\nGo ahead. Starve yourself. Eat yourself from the inside out.\nI realize. I cannot help.\n\nBones enclosed in a dead shell. She lives in hell. She created this herself. She starves herself. I cry alone to sleep. Reaching, failing, she screams, Ana loves me.\n",
            "position": 4,
            "band": null,
            "album": {
                "id": 275630,
                "band_id": 97404,
                "type": "Full-length",
                "name": "If a Dying Man's Plea Is Heard Then Maybe I Should Die",
                "year": 2006,
                "release_date": "2006-01-01T00:00:00Z",
                "label": "",
                "image": "https://www.metal-archives.com/images/1/9/3/3/193312.jpg",
                "total_time": "33:40",
                "band": {
                    "id": 97404,
                    "name": "Second Thief",
                    "country": "",
                    "formed_in": 2005,
                    "label": "",
                    "description": "",
                    "image_logo": "https://www.metal-archives.com/images/1/1/5/6/115630_logo.jpg?4414",
                    "image_band": "https://www.metal-archives.com/images/1/1/5/6/115630_photo.jpg",
                    "genres": null,
                    "lyrical_theme": null
                }
            }
        },
    ],
    albums: [
        {
            "id": 5305,
            "band_id": 1747,
            "type": "Split",
            "name": "Ana Harrani Sa Alaktasa La Tarat",
            "year": 2012,
            "release_date": "2012-06-11T00:00:00Z",
            "label": "CD",
            "image": "https://www.metal-archives.com/images/3/4/5/6/345663.jpg?1801",
            "total_time": "26:29",
            "band": {
                "id": 1747,
                "name": "Acherontas",
                "country": "",
                "formed_in": 2007,
                "label": "",
                "description": "Contact: acherontasvp9@gmail.com\n\nAcherontas formed this band after dissolving his previous band Stutthof in 2007, but does not consider it as a direct continuation.",
                "image_logo": "https://www.metal-archives.com/images/1/1/2/5/112532_logo.jpg",
                "image_band": "https://www.metal-archives.com/images/1/1/2/5/112532_photo.jpg?4122",
                "genres": null,
                "lyrical_theme": null
            }
        },
        {
            "id": 13035,
            "band_id": 4244,
            "type": "Single",
            "name": "Ana Al Tughian",
            "year": 2015,
            "release_date": "2015-02-13T00:00:00Z",
            "label": "7\" VINYL",
            "image": "https://www.metal-archives.com/images/4/8/0/8/480857.jpg?4349",
            "total_time": "11:07",
            "band": {
                "id": 4244,
                "name": "AlNamrood",
                "country": "",
                "formed_in": 2008,
                "label": "",
                "description": "AlNamrood translates to \"the non-believer\" and comes from an ancient historical autocratic character. He ruled the world maliciously and stated \"I am the God of all creation\".",
                "image_logo": "https://www.metal-archives.com/images/3/5/4/0/3540256815_logo.jpg?4235",
                "image_band": "https://www.metal-archives.com/images/3/5/4/0/3540256815_photo.jpg",
                "genres": null,
                "lyrical_theme": null
            }
        },
        {
            "id": 13136,
            "band_id": 4275,
            "type": "Full-length",
            "name": "For Ana",
            "year": 2015,
            "release_date": "2015-09-06T00:00:00Z",
            "label": "DIGITAL",
            "image": "https://www.metal-archives.com/images/5/3/2/6/532680.jpg?3651",
            "total_time": "36:13",
            "band": {
                "id": 4275,
                "name": "Alpha Drone",
                "country": "",
                "formed_in": 2004,
                "label": "",
                "description": "Contact: aozr@alphadrone.de\n\nAdditional discography:\n- Fire & Ice (unreleased demo)\n- Stargazer (unreleased demo) \n- Sword and Spirit (digital single)\n\nAll unreleased material was later released on the Black Tribe compilation The Burning of Blood and Soil - The Unreleased Alpha Drone Demos.\n\nThe name \"Alpha Drone\" is taken from a science fiction short story Johann Aegidius Ritter wrote at a younger age, inspired by Aldous Huxley's \"Brave New World\". After watching the movie \"Gattaca\" and discovering too many parallels, he decided never to publish the story. The name symbolizes the superiority of theozoological eugenics attempting to restore man's divinity over modern \"bee-hive\" genetic engineering attempting to increase man's economic productivity.",
                "image_logo": "https://www.metal-archives.com/images/2/5/1/7/25176_logo.gif",
                "image_band": "https://www.metal-archives.com/images/2/5/1/7/25176_photo.jpg",
                "genres": null,
                "lyrical_theme": null
            }
        },
    ],
    bands: [
        {
            "id": 5024,
            "name": "Ana Black",
            "country": "CANADA",
            "formed_in": 1983,
            "label": "RAGGED",
            "description": "Initially disbanded in 1996 while in Los Angeles. However, Mick Scott is reportedly touring with a new line-up.",
            "image_logo": "https://www.metal-archives.com/images/5/8/5/2/5852_logo.JPG",
            "image_band": "https://www.metal-archives.com/images/5/8/5/2/5852_photo.jpg",
            "genres": [
                "HEAVY",
                "POWER METAL"
            ],
            "lyrical_theme": [
                "N/A"
            ]
        },
        {
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
        },
        {
            "id": 5027,
            "name": "Ana-Spy'z",
            "country": "JAPAN",
            "formed_in": 2003,
            "label": "HEAVY METAL",
            "description": "",
            "image_logo": "https://www.metal-archives.com/images/3/5/4/0/3540256440_logo.jpg",
            "image_band": "https://www.metal-archives.com/images/3/5/4/0/3540256440_photo.jpg",
            "genres": [
                "HEAVY METAL"
            ],
            "lyrical_theme": [
                "N/A"
            ]
        }

    ],
};
