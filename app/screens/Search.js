import React, { useContext, useState } from 'react';
import { FlatList, SafeAreaView, TextInput, View, Text } from "react-native";
import Card from '../controls/card';
import FavoritesContext from '../context/FavoritesContext';
import MoviesContext from '../context/MoviesContext';
import { Searchbar } from 'react-native-paper';
const Search = (props) => {
    const { addProductToFavorites } = useContext(FavoritesContext);
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState(undefined);
    const { movies } = useContext(MoviesContext)
    const renderItem = ({ item }) => {
        return (
            <Item item={item} />);
    }
    const Item = ({ item }) => {
        return (
            <Card item={item}
                onAddToFavorite={() => {
                    addProductToFavorites(item)
                }}
            />
        )
    };
    const onSearch = (queryText) => {
        if (queryText !== "") {
            let newData;
            newData = movies.filter(movie => {
                let movieObj = `${movie.title.toUpperCase()}`;
                let Query = queryText.toUpperCase();
                return movieObj.includes(Query);
            });
            setSearchResults(newData);
        }
    }

    return (
        <SafeAreaView>
            <View>
                {/* <TextInput onChangeText={(text) => {
                    setQuery(text)
                    onSearch(query);
                }}></TextInput> */}
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