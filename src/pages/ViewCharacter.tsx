import {useParams} from "react-router-dom";
import AddComment from "../ui/AddComment.tsx";
import useLocalStorage from "../hooks/useLocalStorage.ts";
import CharacterViewSkeleton from "../ui/skeleton/CharacterViewSkeleton.tsx";
import { useNavigate } from 'react-router-dom';
import FavoriteButton from "../components/FavoriteButton.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";
import useSoftDelete from "../hooks/useSoftDelete.ts";
import { GET_CHARACTER_DETAILS } from "../graphql/queries.ts";
import ErrorQuery from "../ui/ErrorQuery.tsx";
import {useQuery} from "@apollo/client";


const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
        case "alive":
            return "bg-lime-500";
        case "dead":
            return "bg-red-500";
        default:
            return "bg-gray-500";
    }
}

const ViewCharacterPage = () => {
    const navigate = useNavigate();
    const { characterId } = useParams();
    const { handleDeleted } = useSoftDelete();
    const [commentValue, setLocalStorageComment, removeLocalStorageComment] = useLocalStorage(`comment-${characterId}`, "");

    // Use graphql to get the filtered content
    const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, { variables: { id: characterId }});

    // Show a loading component
    if(loading) {
        return <CharacterViewSkeleton />
    }

    if(error) {
        return <div className="mx-auto max-w-md">
            <ErrorQuery />
        </div>
    }

    // Save the comment in localstorage or remove it in case it's empty
    const PostComment = (comment) => {
        if(comment !== "") {
            setLocalStorageComment(comment);
        }
        else {
            removeLocalStorageComment();
        }
    }

    // Apply a soft delete for the character, then take the user to previous page
    const onDelete = () => {
        handleDeleted(id);
        navigate(-1);
    }

    const { character: { id, name, image, status, species, gender, type, episode } } = data;

    return <div className="grid grid-cols-1 max-w-md mx-auto">
        <div className="col-span-1 relative">
            <img src={image} alt={name} className="rounded-full mx-auto shadow-lg hover:scale-110" width={200} height={200} />
            <div className="absolute right-0 top-0 cursor-pointer">
                <FavoriteButton characterId={id} />
            </div>
        </div>
        <div className="col-span-1 text-center mt-5">
            <h5 className="text-[30px] font-bold mb-5">{name}</h5>
            <div className="border bg-gray-50 rounded-md p-4 text-start mb-4">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Status</p>
                    <div>
                        <p className={`${getStatusClass(status)} p-1 px-2 text-sm rounded-md text-white`}>{status}</p>
                    </div>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Specie</p>
                    <p className="font-semibold">{species}</p>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Gender</p>
                    <p className="font-semibold">{gender}</p>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Type</p>
                    <p className="font-semibold">{(type) ? type : "N/A"}</p>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Episodes</p>
                    <p className="font-semibold">{episode.length}</p>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-end">
                    <PrimaryButton title="Delete" className="bg-red-500 hover:bg-red-700" onClick={() => {onDelete()}}/>
                </div>
            </div>
            <AddComment value={(commentValue) ? commentValue.toString() : ""}
                        onPost={(comment) => PostComment(comment)}/>
        </div>
    </div>
}

export default ViewCharacterPage;
