/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite ] = useState([])

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>
    );
}

// Hook personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFav) {
        const repeatedFav = favorite.some((item) => item.id === newFav.id)

        let newList =[...favorite]

        if (!repeatedFav) {
            newList.push(newFav)
            return setFavorite(newList)
        }

        newList = favorite.filter((fav) => fav.id !== newFav.id)
        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite
    }
}