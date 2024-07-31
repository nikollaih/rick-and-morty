import React from "react";
import CharacterCard from "../ui/CharacterCard.tsx";
import Empty from "../ui/Empty.tsx";
import useLocalStorage from "../hooks/useLocalStorage.ts";

// Sort the favorites list by name
const sortFavorites = (favorites) => {
    return favorites.sort((a, b) => {
        a = JSON.parse(a);
        b = JSON.parse(b);
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
}

const FavoritesPage: React.FC = () => {
    const [favorites] = useLocalStorage('favorites', []);

    if(!favorites || (favorites.length <= 0)) {
        return <Empty title="No favorites!" />
    }

    if(favorites && favorites.length > 0){
        return <div>
            <h5 className="text-xl mb-4 font-bold text-center">My favorites</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sortFavorites(favorites).map((character: any, index: number) =>
                    {
                        character = JSON.parse(character);
                        return <CharacterCard key={index} character={character}/>
                    }
                )}
            </div>
        </div>
    }

    return null;
}

export default FavoritesPage;
