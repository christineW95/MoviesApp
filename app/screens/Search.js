import { FlatList, SafeAreaView, View } from "react-native";
import React, { useContext, useState } from 'react';

import Card from '../controls/Card';
import FavoritesContext from '../context/FavoritesContext';
import MoviesContext from '../context/MoviesContext';
import { Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Search = (props) => {
    const { addProductToFavorites } = useContext(FavoritesContext);
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState(undefined);
    const { movies } = useContext(MoviesContext)

    const renderItem = ({ item }) => {
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
    const onSearch = (queryText) => {
        if (
            queryText === "" ||
            !(Array.isArray(movies.movies.results) && movies.movies.results.length > 0)
        ) {
            return;
        }

        let newData = movies.movies.results.filter(movie => {
            let movieObj = `${movie.title.toUpperCase()}`;
            let Query = queryText.toUpperCase();
            return movieObj.includes(Query);
        });
        setSearchResults(newData);

    }

    return (
        <SafeAreaView>
            <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={(text) => {
                        setQuery(text)
                        onSearch(query)
                    }}
                    value={query}
                />
            </View>
            <FlatList
                numColumns={1}
                initialNumToRender={4}
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    );
}
export default Search;