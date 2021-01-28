import React, { useContext } from 'react';

import {
    View, SafeAreaView, FlatList
} from 'react-native';
import Colors from '../theme/Colors';
import Card from '../controls/card';
import FavoritesContext from '../context/FavoritesContext';
import MoviesContext from '../context/MoviesContext';
import useFetch from "../services/services";


const Home = (props) => {

    console.warn('navigation', useFetch("https://api.themoviedb.org/3/movie/"))
    const { addProductToFavorites } = useContext(FavoritesContext);
    const { movies } = useContext(MoviesContext)
    const renderItem = ({ item }) => {
        return (
            <Item item={item} />);
    }
    const Item = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('MovieDetails')
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
                        data={movies}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </SafeAreaView>
            </View>
        </SafeAreaView>

    );

};


export default Home;
