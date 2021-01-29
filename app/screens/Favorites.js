import {
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import React, { useContext } from 'react';

import { APIURLs } from '../config/APConfig';
import Colors from '../theme/Colors'
import FavoritesContext from '../context/FavoritesContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Favorites = (props) => {
    const { favorites, removeProductFromFavorites } = useContext(FavoritesContext);

    renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: APIURLs.imagesBaseURL + item.backdrop_path }} />
                </View>

                <View style={styles.details}>
                    <View>
                        {/**do not use inline styles */}
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.label}>Release Date : {item.release_date}</Text>
                        <View style={{ flexDirection: "row", marginTop: 4 }}>
                            <Text style={[styles.label, { alignItems: "center", justifyContent: "center" }]}>
                                Vote Average : {item.vote_average / 2}
                            </Text>
                            <Icon name={"star"} color={Colors.starColor} size={20} />
                        </View>
                    </View>
                    <View style={styles.removeButton}>
                        <TouchableOpacity onPress={() =>
                            removeProductFromFavorites(item.id)
                        } >
                            <Text style={styles.removeButtonText}>
                                Remove from Favorites
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }


    return (
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
const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'lightgrey',
        borderWidth: 1,
        margin: 10
    },
    imageContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        resizeMode: 'cover',
        flex: 1,
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10
    },
    details: {
        flex: 7,
        backgroundColor: 'white',
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 12,
    },
    removeButton: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    removeButtonText: {
        color: Colors.primaryColor,
        fontSize: 15
    }
})


export default Favorites;
