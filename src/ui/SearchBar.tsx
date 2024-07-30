import {useSearchParams} from "react-router-dom";
import {useDebouncedCallback} from "use-debounce";
import Filters from "./Filters.tsx";
import {useState} from "react";

const SearchBar = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        // Get the value from searchbar input each time it changes
        let value = event.target.value.toString();
        // Get all the current params in order to keep them even after doing a new query
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', '1');

        if(value !== "") {
            // Set the new values to the params
            newParams.set('query', value);
        }
        else {
            // Remove the query param in case it's empty
            newParams.delete('query');
        }

        setSearchParams(newParams);
    }, 500)

    // Check if there is at least one filter
    const hasFilters = () => {
        let status = searchParams.get("status");
        let gender = searchParams.get("gender");
        let specie = searchParams.get("specie");

        return (status || gender || specie);
    }

    return <div className="mb-4">
        <div className="relative w-full flex">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="size-5">
                    <path strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
            </div>
            <input type="text"
                   id="search"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:border-indigo-600 block w-full pl-10 p-2.5 "
                   placeholder="Search character..."
                   onChange={handleChange}
                   defaultValue={searchParams.get('query')?.toString()}
            />
            <button
                onClick={() => setShowFilters(true)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md ml-2 px-3 lg:hidden relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor"
                     className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/>
                </svg>
                {hasFilters() &&
                    <span className="absolute w-[15px] rounded-xl h-[15px] bg-indigo-500 -right-1 -top-1"/>}

            </button>
        </div>
        {
            showFilters && <div className="fixed top-0 left-0 bottom-0 right-0 z-10">
                <Filters onClose={() => setShowFilters(false) }/>
            </div>
        }
    </div>

}

export default SearchBar;
