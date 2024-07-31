import useLocalStorage from "./useLocalStorage.ts";

const useFavorites = () => {
    const [favoritesValue, setLocalStorageFavorites] = useLocalStorage(`favorites`, []);

    // Handle the add or remove character from favorite list
    // Using callback prevent re-renders if the favoritesValue hasn't changed
    const handleFavorites = (character: object) => {
        let localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));

        if(localStorageFavorites) {
            // Search for the id in the deleted list
            let exists = localStorageFavorites.some((del) => del === JSON.stringify(character));

            if (exists) {
                const index = localStorageFavorites.indexOf(JSON.stringify(character));
                if (index !== -1) {
                    localStorageFavorites.splice(index, 1);
                }
            } else {
                localStorageFavorites.push(JSON.stringify(character));
            }
            setLocalStorageFavorites(localStorageFavorites);
        }
        else {
            setLocalStorageFavorites([JSON.stringify(character)]);
        }
    };

    // Check if a given id is favorite
    const isFavorite = (characterId: object) => {
        return favoritesValue.includes(JSON.stringify(characterId));
    }

    return {favoritesValue, isFavorite, handleFavorites};
}

export default useFavorites;
