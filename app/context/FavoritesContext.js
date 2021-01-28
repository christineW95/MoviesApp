import React, { createContext } from "react";
const FavoritesContext = createContext({
    favorites: [
    ],
    addProductToFavorites: product => {
    },
    removeProductFromFavorites: productId => { }
});
export default FavoritesContext;