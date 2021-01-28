import React, { useContext } from 'react';
import {
    Image,
    View, Text, FlatList, SafeAreaView, Button, TouchableOpacity

} from 'react-native';
import FavoritesContext from '../context/FavoritesContext';
import Colors from '../theme/Colors'
import MoviesDetails from './MoviesDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Favorites = (props) => {
    const { favorites, removeProductFromFavorites } = useContext(FavoritesContext);

    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: Colors.white, borderRadius: 5, borderColor: 'lightgrey', borderWidth: 1, margin: 10 }}>

                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                    <Image
                        style={{ resizeMode: 'cover', flex: 1, width: 100, height: 100, margin: 10, borderRadius: 10 }}
                        source={{ uri: "https://image.tmdb.org/t/p/w500" + item.backdrop_path }} />
                </View>

                <View style={{ flex: 7, backgroundColor: 'white', padding: 10 }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{item.title}</Text>
                        <Text style={{ fontSize: 12, }}>Release Date : {item.release_date}</Text>
                        <Text style={{ fontSize: 12, }}>Vote Average : {item.vote_average}
                            <Icon name={"star"} color={Colors.yellow} size={20} />
                        </Text>
                    </View>
                    <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() =>
                            removeProductFromFavorites(item.id)
                        } >
                            <Text style={{ color: Colors.lightblue, fontSize: 15 }}>
                                Remove from Favorites
                            </Text>
                        </TouchableOpacity>
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
