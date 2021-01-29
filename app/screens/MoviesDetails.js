import { Dimensions, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';

import { APIURLs } from '../config/APConfig';
import FavoritesContext from '../context/FavoritesContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StarRating from 'react-native-star-rating';

const MovieDetails = (props) => {

    let item = props.route.params?.item ?? 'defaultValue';
    const { addProductToFavorites } = useContext(FavoritesContext);

    //TODO: check out this at the end
    let dynamicProperties = [];
    for (let property in item) {
        if (property != "id")
            dynamicProperties.push({ key: property, value: item[property] })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                <View style={styles.scrollView}>
                    <ImageBackground
                        source={{ uri: APIURLs.imagesBaseURL + item.backdrop_path }}
                        style={styles.imageContainer}
                        imageStyle={styles.imageContainer} >

                        <TouchableOpacity
                            style={styles.iconContainer}
                            onPress={() => addProductToFavorites(item)}
                        >
                            <Icon name="heart" size={25} color={"red"} />
                        </TouchableOpacity>
                    </ImageBackground>

                    <Text style={styles.title}>{item.title} </Text>

                    <View style={{ padding: 10 }}>
                        <Text style={styles.section}>{item.overview} </Text>
                        < View style={styles.section}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Release Date</Text>
                            <Text>{item.release_date}</Text>
                        </View >
                        < View style={styles.section}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Language</Text>
                            <Text>{item.original_language.toUpperCase()}</Text>
                        </View >
                        < View style={styles.section}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Vote Count</Text>
                            <Text>{item.vote_count}</Text>
                        </View >
                        < View style={styles.section}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Vote Average</Text>
                            <StarRating
                                containerStyle={styles.stars}
                                disabled={true}
                                emptyStar="star"
                                emptyStarColor="lightgrey"
                                fullStarColor="yellow"
                                starSize={20}
                                maxStars={5}
                                rating={item.vote_average / 2}
                            />
                        </View >

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    scrollView: { paddingVertical: 10 },
    imageContainer: {
        width: "100%",
        height: 300,
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        resizeMode: 'stretch'
    },
    iconContainer: {
        alignSelf: 'flex-end',
        padding: 10
    },
    title: {
        padding: 10,
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10
    },
    section: {
        marginBottom: 10,
    },
    stars: { flex: 2, width: '30%', justifyContent: 'space-evenly', paddingTop: 5 }
})


export default MovieDetails;
