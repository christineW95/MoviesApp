import React, { useContext } from 'react';
import {

    View, SafeAreaView, Dimensions, ScrollView, ImageBackground, TouchableOpacity, Text, ImagePropTypes

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StarRating from 'react-native-star-rating';
import FavoritesContext from '../context/FavoritesContext';

const MovieDetails = (props) => {
    let item = props.route.params?.item ?? 'defaultValue';
    let { screenWidth } = Dimensions.get('screen');
    const { addProductToFavorites } = useContext(FavoritesContext);

    let dynamicProperties = [];
    for (let property in item) {
        if (property != "id")
            dynamicProperties.push({ key: property, value: item[property] })
    }
    // dynamicProperties = dynamicProperties.map(property => {
    //     return (
    //         property.key != "image" ?
    //             (
    //                 property.key == "title" ?
    //                     <View style={{ padding: 10 }}>
    //                         <Text style={{ fontSize: 35, fontWeight: 'bold', }}>{item.title} </Text>
    //                     </View> :
    //                     < View style={{ padding: 10 }}>
    //                         <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{property.key} </Text>
    //                         <Text>{property.value}</Text>
    //                     </View >) :
    //             (<ImageBackground source={{ uri: "https://image.tmdb.org/t/p/w500" + item.backdrop_path }} style={{ width: screenWidth, height: 300, }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: 1, borderColor: 'lightgrey', resizeMode: 'stretch' }} >
    //                 <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 10 }}
    //                     onPress={
    //                         props.onAddToFavorite
    //                     }
    //                 >
    //                     <Icon name="star" size={30} color={Colors.yellow} />
    //                 </TouchableOpacity>
    //             </ImageBackground>)
    //     )
    // });
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView >
                <View style={{ paddingVertical: 10 }}>
                    <ImageBackground source={{ uri: "https://image.tmdb.org/t/p/w500" + item.backdrop_path }} style={{ width: screenWidth, height: 300, }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: 1, borderColor: 'lightgrey', resizeMode: 'stretch' }} >
                        <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 10 }} onPress={() => addProductToFavorites(item)} >
                            <Icon name="heart" size={25} color={"red"} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold', }}>{item.title} </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{}}>{item.overview} </Text>
                        < View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Release Date</Text>
                            <Text>{item.release_date}</Text>
                        </View >
                        < View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Language</Text>
                            <Text>{item.original_language.toUpperCase()}</Text>
                        </View >
                        < View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Vote Count</Text>
                            <Text>{item.vote_count}</Text>
                        </View >
                        < View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Vote Average</Text>
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
                        </View >

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>

    );
};


export default MovieDetails;
