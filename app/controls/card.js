import React from 'react';
import { View, Text, Image, ImageBackground, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import CustomButton from './button';
import Colors from '../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Card = (props) => {
    let item = props.item;
    let screenWidth = Dimensions.get('screen').width - 22;
    return (
        //main container

        <View style={{ flex: 1, margin: 10, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey' }}>
            <ImageBackground source={{ uri: item.image }} style={{ width: screenWidth, height: 300, }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: 1, borderColor: 'lightgrey', resizeMode: 'stretch' }} >
                <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 10 }} onPress={props.onAddToFavorite} >
                    <Icon name="star" size={30} color={Colors.yellow} />
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
                    <Text>Release Date : {item.releaseDate}</Text>
                    <Text>Language : {item.language}</Text>
                    <Text>Vote Average : {item.voteAverage}</Text>
                </View>
            </View>
        </View>

    )
}
export default Card;