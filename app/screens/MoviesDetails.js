import React from 'react';
import {

    View, SafeAreaView, Dimensions, ScrollView, ImageBackground, TouchableOpacity, Text, ImagePropTypes

} from 'react-native';
import Colors from '../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const MovieDetails = () => {

    let { screenWidth, screenHeight } = Dimensions.get('screen');
    let item = {
        id: 1,
        image: "/Volumes/Work/Tasks/MoviesApp/app/images/Screen Shot 2021-01-21 at 3.08.49 PM.jpeg",
        title: "Movie 1",
        releaseDate: "12/19/2000",
        language: "English",
        voteAverage: 9.0,
        genres: "Comedy",
        overview: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
        voteCount: 4
    }
    let dynamicProperties = [];
    for (let property in item) {
        if (property != "id")
            dynamicProperties.push({ key: property, value: item[property] })
    }
    dynamicProperties = dynamicProperties.map(property => {
        return (
            property.key != "image" ?
                (
                    property.key == "title" ?
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 35, fontWeight: 'bold', }}>{item.title} </Text>
                        </View> :
                        < View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{property.key} </Text>
                            <Text>{property.value}</Text>
                        </View >) :
                (<ImageBackground source={{ uri: item.image }} style={{ width: screenWidth, height: 300, }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: 1, borderColor: 'lightgrey', resizeMode: 'stretch' }} >
                    <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 10 }}
                    //     onPress={
                    //     props.onAddToFavorite
                    // }
                    >
                        <Icon name="star" size={30} color={Colors.yellow} />
                    </TouchableOpacity>
                </ImageBackground>)
        )
    });
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView >
                <View style={{ paddingVertical: 10 }}>
                    {dynamicProperties}
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};


export default MovieDetails;
