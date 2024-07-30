import useLocalStorage from "./useLocalStorage.ts";

const useFavorites = () => {
    const [favoritesValue, setLocalStorageFavorites] = useLocalStorage(`favorites`, []);

    // Handle the add or remove character from favorite list
    // Using callback prevent re-renders if the favoritesValue hasn't changed
    const handleFavorites = (characterId: number | string) => {
        let localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));

        if(localStorageFavorites) {
            // Search for the id in the deleted list
            let exists = localStorageFavorites.some((del) => del === characterId);

            if (exists) {
                const index = localStorageFavorites.indexOf(characterId.toString());
                if (index !== -1) {
                    localStorageFavorites.splice(index, 1);
                }
            } else {
                localStorageFavorites.push(characterId);
            }
            setLocalStorageFavorites(localStorageFavorites);
        }
        else {
            setLocalStorageFavorites([characterId]);
        }
    };

    // Check if a given id is favorite
    const isFavorite = (characterId: number | string) => {
        let localStorageFavorites = structuredClone(favoritesValue);
        return localStorageFavorites.some((fav) => fav === characterId);
    }

    return {favoritesValue, isFavorite, handleFavorites};
}

export default useFavorites;
