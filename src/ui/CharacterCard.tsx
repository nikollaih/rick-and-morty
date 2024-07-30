import {ICharacterCard} from "../interfaces/Characters.ts";
import React from "react";
import { Link } from 'react-router-dom';
import FavoriteButton from "../components/FavoriteButton.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";
import useSoftDelete from "../hooks/useSoftDelete.ts";

const CharacterCard = ({character}: { character: ICharacterCard }) => {
    const { handleDeleted, isDeleted } = useSoftDelete();

    if(isDeleted(character.id))
        return null

    return <div  className="bg-gray-100 border border-gray-200 rounded-lg shadow">
        <div className="overflow-hidden relative rounded-t-lg">
            <img
                className="w-full rounded-t-lg hover:scale-110"
                height="290px"
                src={character.image}
                alt={character.name}
                loading="lazy"
            />
        </div>
        <div className="p-5">
            <div className="flex justify-between items-start">
                <h5 className="text-2xl tracking-tight text-gray-900 -mt-1">{character.name}</h5>
                <FavoriteButton characterId={character.id} size={"6"}/>
            </div>
            <p className="mb-4 text-gray-500">{character.species}</p>
            <hr className="mb-4"/>
            <div className="flex items-center justify-between">
                <Link to={`/characters/${character.id}`}>
                    <PrimaryButton title="Read more" className="" onClick={() => {}}/>
                </Link>
                <PrimaryButton
                    title="Delete"
                    className="bg-red-500 hover:bg-red-700"
                    onClick={() => {handleDeleted(character.id)}}
                />
            </div>
        </div>
    </div>

}

export default CharacterCard;
