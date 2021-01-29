import React, { useState } from "react";
import FavoritesContext from "./context/FavoritesContext";
import MoviesContext from "./context/MoviesContext";
import useFetch from "./services/Services";
import { APIURLs } from "./config/APConfig"
const GlobalState = (props) => {
    const [favorite, setFavorite] = useState([]);
    const addProductToFavorite = (product) => {
        let productIndex = favorite.findIndex(item => {
            return item.id == product.id;
        })
        if (productIndex >= 0) {
            removeProductFromFavorite(product.id)
        }
        else
            setFavorite([...favorite, product])
    };
    const removeProductFromFavorite = productId => {
        let productIndex = favorite.findIndex(item => {
            return item.id == productId;
        })
        if (productIndex >= 0) {
            let newFavoriteList = [...favorite];
            newFavoriteList.splice(productIndex, 1);
            setFavorite(newFavoriteList)
        }

    };
    return (
        <MoviesContext.Provider
            value={{
                movies: useFetch(APIURLs.getMovies + "?api_key=" + APIURLs.moviesKey)
            }}>
            <FavoritesContext.Provider
                value={{
                    favorites: favorite,
                    addProductToFavorites: addProductToFavorite,
                    removeProductFromFavorites: removeProductFromFavorite
                }}
            >
                {props.children}
            </FavoritesContext.Provider>
        </MoviesContext.Provider>

    );
}

export default GlobalState;
