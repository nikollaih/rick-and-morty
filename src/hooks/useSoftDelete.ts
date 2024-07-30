import useLocalStorage from "./useLocalStorage.ts";
import {useState} from "react";

const useSoftDelete = () => {
    const [deletedValue, setLocalStorageDeleted] = useLocalStorage('deletes', []);

    const [changedValue, setChangedValue] = useState('');

    // Handle the add or remove character from deleted list
    // Using callback prevent re-renders if the deletedValue hasn't changed
    const handleDeleted = (characterId: number) => {
        let localStorageDeleted = JSON.parse(localStorage.getItem('deletes'));

        // If there are any other deleted characters it will include the new one
        if(localStorageDeleted) {
            localStorageDeleted.push(characterId);
            setLocalStorageDeleted(localStorageDeleted);
        }
        else {
            // If this is the first deleted character it will create the array with initial id
            setLocalStorageDeleted([characterId]);
        }

        setChangedValue(characterId.toString());
    };

    // Check if a given id is deleted
    const isDeleted = (characterId: number) => {
        let localStorageDeleted = structuredClone(deletedValue);
        return localStorageDeleted.some((del) => del === characterId);
    }

    return {deletedValue, isDeleted, handleDeleted, changedValue};
}

export default useSoftDelete;
