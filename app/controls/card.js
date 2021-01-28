import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StarRating from 'react-native-star-rating';
const Card = (props) => {
    let item = props.item;
    let screenWidth = Dimensions.get('screen').width - 22;
    return (
        //main container

        <View style={{ flex: 1, margin: 10, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey' }}>
            <ImageBackground source={{ uri: "https://image.tmdb.org/t/p/w500" + item.backdrop_path }} style={{ width: screenWidth, height: 300, }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: 1, borderColor: 'lightgrey', resizeMode: 'stretch' }} >
                <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 10 }} onPress={props.onAddToFavorite} >
                    <Icon name="heart" size={25} color={"red"} />
                </TouchableOpacity>
            </ImageBackground>

            {/* details container */}
            <View style={{ flex: 3, backgroundColor: 'white', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}>
                {/* title */}
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{item.title}</Text>
                </View>
                {/* details */}
                <View>
                    <Text>Release Date : {item.release_date}</Text>
                    <Text>Language : {item.original_language.toUpperCase()}</Text>
                    <Text>Vote Average : {item.vote_average}

                    </Text>
                    <StarRating
                        containerStyle={{ flex: 2, width: '30%', justifyContent: 'space-evenly', paddingTop: 5 }}
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
export default Card;