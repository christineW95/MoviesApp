import React, { useContext } from 'react';

import {
    View, SafeAreaView, FlatList, TouchableOpacity
} from 'react-native';
import Colors from '../theme/Colors';
import Card from '../controls/card';
import FavoritesContext from '../context/FavoritesContext';
import MoviesContext from '../context/MoviesContext';


const Home = (props) => {
    const { addProductToFavorites } = useContext(FavoritesContext);
    const { movies } = useContext(MoviesContext);
    const renderItem = ({ item }) => {
        return (
            <Item item={item} />);
    }
    const Item = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('MovieDetails', { item: item })
            }}>
                <Card item={item}
                    onAddToFavorite={() => {
                        addProductToFavorites(item)
                    }}
                />
            </TouchableOpacity>
        )
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Colors.backgroundColor }}>
                <SafeAreaView>
                    <FlatList
                        numColumns={1}
                        initialNumToRender={4}
                        data={movies.movies.results}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </SafeAreaView>
            </View>
        </SafeAreaView>

    );

};


export default Home;
