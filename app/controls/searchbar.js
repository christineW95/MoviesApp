import React from 'react';
import { View, Text, TextInput } from 'react-native';
const SearchBar = (props) => {

    return (
        <View >
            <Text>Search</Text>
            <TextInput onChangeText={props.onChangeText}></TextInput>

        </View>
    )
}
export default SearchBar;