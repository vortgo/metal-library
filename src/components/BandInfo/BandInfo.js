import React, {Component} from 'react'
import {ScrollView, Text, View, Image, ImageBackground, FlatList} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Tab, Tabs} from 'native-base';
import Title from "../Title";
import Item from "../LatestBandUpdateList/Item";
import BandRelease from "./BandRelease";


export default class BandInfo extends Component {

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
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    render() {
        return (
            <Grid>
                <Row size={2}>
                    <ImageBackground
                        blurRadius={5}
                        style={styles.backgroundImage}
                        source={{uri: 'https://www.metal-archives.com/images/3/5/4/0/3540309034_photo.jpg'}}
                    >
                        <ImageBackground
                            resizeMode={'contain'}
                            style={styles.backgroundImage}
                            source={{uri: 'https://www.metal-archives.com/images/3/5/4/0/3540309034_photo.jpg'}}
                        >
                            <Title text={data.name}
                                   style={{textAlign: 'left', position: 'absolute', bottom: 0, margin: 20}}/>
                        </ImageBackground>
                    </ImageBackground>
                </Row>
                <Row size={3}>
                    <Tabs>
                        <Tab heading="Band Info" style={styles.tab}>
                            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
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
                                    <Row>
                                        <Col>
                                            <Text style={styles.text}>Lyrical themes:</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.text}>{this.implodeArray(data.lyrical_theme)}</Text>
                                        </Col>
                                    </Row>
                                </Grid>
                            </ScrollView>
                        </Tab>
                        <Tab heading="Description" style={styles.tab}>
                            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            <Text style={styles.text}>{data.description}</Text>
                            </ScrollView>
                        </Tab>
                        <Tab heading="Releases" style={styles.releasesTab}>
                            <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                data={albums.sort(this.sortReleases('-year'))}
                                renderItem={({item: rowData}) => {
                                    return (
                                        <BandRelease album={rowData}/>
                                    );
                                }}
                            />
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
        backgroundColor: 'rgb(18, 33, 57)',
        padding: 20,
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

const data = {
    "id": 5026,
    "name": "Ana Kefr",
    "country": "UNITED STATES",
    "status": "Active",
    "formed_in": 2008,
    "label": "PROGRESSIVE/DEATH METAL",
    "description": "One of the pioneers of death/doom metal alongside Paradise Lost and My Dying Bride.\n\nIn the beginning, Anathema were a death/doom metal band. Progressively, they've changed their music, today playing atmospheric/progressive rock.\n\nGuitarist Vincent Cavanagh took over as the band's vocalist when Darren J. White left. Anathema currently have three of the original five band members in their line-up, but Vincent Cavanagh has been the only ever-present.\n\nAnathema effectively traded keyboard players with Cradle of Filth in 2000. Martin Powell left his role as Anathema's live keyboardist to join Cradle as replacement for Les Smith, who then went on to join Anathema first in a touring capacity and later as a permanent member.\n\nShortly after the release of A Fine Day to Exit, Danny left the band and relocated to Ireland to work with Duncan Patterson in Antimatter. That did not work out and Danny returned to Anathema with a full album's worth of songs which became A Natural Disaster.\n\nVincent, Danny and Jamie Cavanagh are brothers; Vincent and Jamie beings twins. John and Lee Douglas are brother and sister.\n\nCompilation appearances\n- \"Lovelorn Rhapsody\" on Peaceville Vol. 4 (Peaceville, 1992)\n- \"Welcome to Hell\" on In the Name of Satan: A Tribute to Venom  (1994)\n- \"Read Between the Lies\" on Slatanic Slaughter II: A Tribute to Slayer (1996)\n-  \"Better Off Dead\" on Peaceville X (Peaceville, 1998) \n- \"Wasted Years\" on Maiden Heaven, Volume 2 (Kerrang! Magazine, 2016)",
    "image_logo": "https://www.metal-archives.com/images/3/5/4/0/3540309034_logo.jpg",
    "image_band": "https://www.metal-archives.com/images/3/5/4/0/3540309034_photo.jpg",
    "genres": [
        "PROGRESSIVE",
        "DEATH METAL",
        "PROGRESSIVE",
        "DEATH METAL",
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

const albums = [{"id":15757,"band_id":5212,"type":"Demo","name":"An Iliad of Woes","year":1990,"release_date":"1990-11-25T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/3/5/4/13545.jpg","total_time":"31:23","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15758,"band_id":5212,"type":"Demo","name":"All Faith Is Lost","year":1991,"release_date":"1991-05-20T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/3/5/4/13549.jpg?5943","total_time":"27:11","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15759,"band_id":5212,"type":"Single","name":"They Die / Crestfallen","year":1992,"release_date":"1992-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/4/0/5/14058.jpg?5217","total_time":"14:21","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15760,"band_id":5212,"type":"EP","name":"The Crestfallen EP","year":1992,"release_date":"1992-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/3/3/6/0/3360.jpg","total_time":"33:30","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15761,"band_id":5212,"type":"Full-length","name":"Serenades","year":1993,"release_date":"1993-02-28T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/0/6/1606.jpg?2356","total_time":"01:05:45","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15762,"band_id":5212,"type":"Single","name":"We Are the Bible","year":1994,"release_date":"1994-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/0/6/9/10690.jpg","total_time":"10:35","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15763,"band_id":5212,"type":"Compilation","name":"Serenades / Crestfallen","year":1994,"release_date":"1994-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/5/0/8/3/508348.jpg?3033","total_time":"01:31:12","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15764,"band_id":5212,"type":"EP","name":"Pentecost III","year":1995,"release_date":"1995-03-06T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/0/7/1607.jpg","total_time":"41:21","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15765,"band_id":5212,"type":"Full-length","name":"The Silent Enigma","year":1995,"release_date":"1995-08-23T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/0/8/1608.jpg","total_time":"54:37","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15766,"band_id":5212,"type":"Compilation","name":"The Crestfallen EP + Pentecost III","year":1996,"release_date":"1996-05-17T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/5/0/3/5/503595.jpg?5821","total_time":"01:13:47","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15767,"band_id":5212,"type":"Full-length","name":"Eternity","year":1996,"release_date":"1996-11-11T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/0/9/1609.jpg","total_time":"57:54","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15768,"band_id":5212,"type":"Demo","name":"Demos '97","year":1997,"release_date":"1997-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/2/9/3/6/293603.jpg","total_time":"","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15769,"band_id":5212,"type":"Video","name":"A Vision of a Dying Embrace","year":1997,"release_date":"1997-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/4/0/7/14076.jpg?5737","total_time":"01:12:23","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15770,"band_id":5212,"type":"Full-length","name":"Alternative 4","year":1998,"release_date":"1998-08-11T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/1/0/1610.jpg","total_time":"44:57","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15771,"band_id":5212,"type":"Single","name":"Deep","year":1999,"release_date":"1999-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/4/5/2/9/452956.jpg?2250","total_time":"10:46","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15772,"band_id":5212,"type":"Single","name":"Make It Right","year":1999,"release_date":"1999-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/5/4/5/3/545301.jpg?4536","total_time":"09:12","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15773,"band_id":5212,"type":"Full-length","name":"Judgement","year":1999,"release_date":"1999-06-21T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/1/1/1611.jpg?5723","total_time":"56:56","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15774,"band_id":5212,"type":"Single","name":"Pressure","year":2001,"release_date":"2001-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/4/5/2/9/452959.jpg?2811","total_time":"11:00","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15775,"band_id":5212,"type":"Compilation","name":"Resonance","year":2001,"release_date":"2001-09-24T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/1/2/1612.jpg","total_time":"50:21","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15776,"band_id":5212,"type":"Full-length","name":"A Fine Day to Exit","year":2001,"release_date":"2001-10-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/1/4/1614.jpg?5542","total_time":"01:02:29","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15777,"band_id":5212,"type":"Compilation","name":"Resonance 2","year":2002,"release_date":"2002-02-25T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/6/1/5/1615.jpg","total_time":"01:04:10","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15778,"band_id":5212,"type":"Full-length","name":"A Natural Disaster","year":2003,"release_date":"2003-11-03T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/3/0/9/5/30958.jpg","total_time":"55:23","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15779,"band_id":5212,"type":"Video","name":"Were You There?","year":2004,"release_date":"2004-11-15T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/6/2/3/1/62311.jpg","total_time":"01:50:11","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15780,"band_id":5212,"type":"Video","name":"A Moment in Time","year":2006,"release_date":"2006-06-19T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/1/8/2/118276.jpg","total_time":"01:50:43","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15781,"band_id":5212,"type":"Single","name":"Flying / Unchained (Tales of the Unexpected)","year":2008,"release_date":"2008-07-28T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/2/0/6/0/206017.jpg","total_time":"10:45","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15782,"band_id":5212,"type":"Full-length","name":"Hindsight","year":2008,"release_date":"2008-08-25T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/1/9/8/3/198381.jpg?0337","total_time":"52:38","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15783,"band_id":5212,"type":"Full-length","name":"We're Here Because We're Here","year":2010,"release_date":"2010-05-31T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/2/6/8/3/268391.jpg?0152","total_time":"57:54","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15784,"band_id":5212,"type":"Single","name":"Everything","year":2010,"release_date":"2010-06-07T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/2/7/9/0/279026.jpg?4705","total_time":"05:04","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15785,"band_id":5212,"type":"Boxed set","name":"Original Album Classics","year":2011,"release_date":"2011-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/4/6/8/7/468779.jpg?1316","total_time":"02:54:48","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15786,"band_id":5212,"type":"Single","name":"Dreaming Light","year":2011,"release_date":"2011-07-04T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/3/1/1/0/311037.jpg?3529","total_time":"13:00","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15787,"band_id":5212,"type":"Full-length","name":"Falling Deeper","year":2011,"release_date":"2011-09-05T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/3/1/1/8/311828.jpg?3700","total_time":"38:58","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15788,"band_id":5212,"type":"Full-length","name":"Weather Systems","year":2012,"release_date":"2012-04-16T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/3/2/9/7/329702.jpg?4509","total_time":"55:44","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15789,"band_id":5212,"type":"Live album","name":"Untouchable","year":2013,"release_date":"2013-07-15T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/3/7/6/3/376352.jpg?2305","total_time":"38:0739:14","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15790,"band_id":5212,"type":"Video","name":"Universal","year":2013,"release_date":"2013-09-23T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/3/8/2/6/382626.jpg?4309","total_time":"02:34:50","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15791,"band_id":5212,"type":"Single","name":"Untouchable","year":2014,"release_date":"2014-04-19T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/4/0/6/6/406658.jpg?5238","total_time":"23:34","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15792,"band_id":5212,"type":"Single","name":"The Lost Song Part 3","year":2014,"release_date":"2014-06-03T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/4/1/1/4/411416.jpg?3744","total_time":"12:02","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15793,"band_id":5212,"type":"Full-length","name":"Distant Satellites","year":2014,"release_date":"2014-06-09T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/4/0/7/6/407626.jpg?5853","total_time":"56:45","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15794,"band_id":5212,"type":"Compilation","name":"Fine Days: 1999-2004","year":2015,"release_date":"2015-04-13T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/5/0/6/7/506700.jpg?3608","total_time":"56:5701:02:3055:2601:50:11","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15795,"band_id":5212,"type":"Compilation","name":"Resonance 1 \u0026 2","year":0,"release_date":"0001-01-01T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/7/3/8/5/738598.jpg?1955","total_time":"50:2101:04:10","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15796,"band_id":5212,"type":"Video","name":"A Sort of Homecoming","year":2015,"release_date":"2015-10-27T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/5/3/0/7/530797.jpg?4647","total_time":"01:55:34","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15797,"band_id":5212,"type":"Single","name":"Springfield","year":2017,"release_date":"2017-03-30T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/6/4/1/4/641468.jpg?5749","total_time":"05:49","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15798,"band_id":5212,"type":"Full-length","name":"The Optimist","year":2017,"release_date":"2017-06-09T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/6/4/0/2/640203.jpg?4559","total_time":"58:16","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}},{"id":15799,"band_id":5212,"type":"Compilation","name":"Internal Landscapes - The Best of 2008-2018","year":2018,"release_date":"2018-10-26T00:00:00Z","label":"","image":"https://www.metal-archives.com/images/7/4/5/3/745330.jpg?1502","total_time":"","band":{"id":0,"name":"","country":"","formed_in":0,"label":"","description":"","image_logo":"","image_band":"","genres":null,"lyrical_theme":null}}];