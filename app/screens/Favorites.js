import React, { useContext } from 'react';
import {
    Image,
    View, Text, FlatList, SafeAreaView, Button

} from 'react-native';
import FavoritesContext from '../context/FavoritesContext';
import Colors from '../theme/Colors'
import MoviesDetails from './MoviesDetails';

const Favorites = (props) => {
    const { favorites, removeProductFromFavorites } = useContext(FavoritesContext);

    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: Colors.white, borderRadius: 5, borderColor: 'lightgrey', borderWidth: 1, margin: 10 }}>

                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                    <Image
                        style={{ resizeMode: 'cover', flex: 1, width: 100, height: 100, margin: 10, borderRadius: 10 }}
                        source={{ uri: item.image }} />
                </View>

                <View style={{ flex: 7, backgroundColor: 'white', padding: 10 }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{item.title}</Text>
                        <Text style={{ fontSize: 12, }}>Release Date : {item.releaseDate}</Text>
                        <Text style={{ fontSize: 12, }}>Vote Average : {item.voteAverage}</Text>
                    </View>
                    <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <Button title="Remove from Favorites" onPress={removeProductFromFavorites} />
                    </View>
                </View>

            </View>
        );
    }


    return (
        // <MoviesDetails />
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>
                <FlatList
                    initialNumToRender={4}
                    data={favorites}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};


export default Favorites;
