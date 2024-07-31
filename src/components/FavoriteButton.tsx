import React from "react";
import useFavorites from "../hooks/useFavorites.ts";
import {IFavoriteCharacterFields} from "../interfaces/Characters.ts";

const FavoriteButton = ({character, size = 10}: {character: object, size?: string}) => {
    const {isFavorite, handleFavorites} = useFavorites();

    // Get the necessary fields to create the new favorite row
    const favoriteFields: IFavoriteCharacterFields = {
        id: character.id,
        name: character.name,
        image: character.image,
        species: character.species
    }

    return <button
        className="cursor-pointer"
        onClick={() => {
            handleFavorites(favoriteFields)
        }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill={`${isFavorite(favoriteFields) ? '#fd3333' : 'none'}`}
             viewBox="0 0 24 24" strokeWidth="1.5"
             stroke={`${isFavorite(favoriteFields) ? '#fd3333' : 'black'}`} className={`size-${size}`}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
        </svg>
        <div className="p-5" />
    </button>
}

export default FavoriteButton;
