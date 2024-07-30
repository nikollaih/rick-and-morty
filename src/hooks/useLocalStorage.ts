import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    // Get the value from localStorage if available, otherwise use initialValue
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState(initial);

    // Save a new value in localstorage
    const setLocalStorageValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    // Function to remove the item from localStorage
    const removeLocalStorageValue = () => {
        setValue(null);
        localStorage.removeItem(key);
    };

    return [value, setLocalStorageValue, removeLocalStorageValue];
}

export default useLocalStorage;
