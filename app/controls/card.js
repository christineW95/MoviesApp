import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import StarRating from 'react-native-star-rating';
import { APIURLs } from "../config/APConfig";
const Card = (props) => {
    let item = props.item;
    return (
        //main container
        <View style={styles.container}>

            <ImageBackground
                source={{ uri: APIURLs.imagesBaseURL + item.backdrop_path }}
                style={styles.image}
                imageStyle={styles.backgroundImage}
            >
                <TouchableOpacity style={styles.favoritesIcon} onPress={props.onAddToFavorite} >
                    <Icon name="heart" size={25} color={"red"} />
                </TouchableOpacity>
            </ImageBackground>

            {/* details container */}
            <View style={styles.detailsContainer}>
                {/* title */}
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                {/* details */}
                <View>
                    <Text>Release Date : {item.release_date}</Text>
                    <Text>Language : {item.original_language.toUpperCase()}</Text>
                    <Text>Vote Average : {item.vote_average / 2}

                    </Text>
                    <StarRating
                        containerStyle={styles.starsRating}
                        disabled={true}
                        emptyStar="star"
                        emptyStarColor="lightgrey"
                        fullStarColor="yellow"
                        starSize={20}
                        maxStars={5}
                        rating={item.vote_average / 2}
                    />
                </View>
            </View>
        </View>

    )
}
//Use a seperate object for styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    image: {
        width: "100%",
        height: 300,
    },
    backgroundImage: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgrey', resizeMode: 'stretch'
    },
    detailsContainer: {
        flex: 3,
        backgroundColor: 'white',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10
    }, title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    starsRating: {
        flex: 2, width: '30%', justifyContent: 'space-evenly', paddingTop: 5
    }, favoritesIcon: { alignSelf: 'flex-end', padding: 10 }
})
export default Card;