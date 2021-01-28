import React, { useState } from "react";
import FavoritesContext from "./context/FavoritesContext";
import MoviesContext from "./context/MoviesContext";
import useFetch from "./services/services";
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
        console.warn(productId.id)
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
                movies: useFetch("https://api.themoviedb.org/3/discover/movie?api_key=88591e1e43826c186c436a5d4f0cfda9")
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
