import React from 'react';
import { View, Text, Image, ImageBackground, TouchableHighlight, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import CustomButton from './button';
import Colors from '../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const SearchBar = (props) => {

    return (
        <View >
            <Text>Search</Text>
            <TextInput onChangeText={props.onChangeText}></TextInput>

        </View>
    )
}
export default SearchBar;