import CharacterCard from "./CharacterCard.tsx";
import Paginator from "./Paginator.tsx";
import {useSearchParams} from "react-router-dom";
import CharactersListSkeleton from "./skeleton/CharactersListSkeleton.tsx";
import ErrorQuery from "./ErrorQuery.tsx";
import { GET_CHARACTERS } from "../graphql/queries.ts";
import {useQuery} from "@apollo/client";


const CharacterList = () => {
    const [searchParams] = useSearchParams();
    // Get the search params filters to be used in query
    const currentPage = Number(searchParams.get('page')) || 1;
    const query = searchParams.get('query') || '';
    const status = searchParams.get('status') || '';
    const gender = searchParams.get('gender') || '';
    const specie = searchParams.get('specie') || '';

    // Use graphql to get the filtered content
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page: currentPage,
            query: query,
            status: status,
            gender: gender,
            specie: specie
        }
    });

    if(loading) {
        return <CharactersListSkeleton />;
    }

    if (error) {
        return <ErrorQuery />;
    }

    return <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.characters.results.map((character: any, index: number) =>
                <CharacterCard key={index} character={character}/>)}
        </div>
        <Paginator pages={data.characters.info.pages}/>
    </div>
}

export default CharacterList;
