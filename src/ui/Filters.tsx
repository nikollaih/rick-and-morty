import FilterButton from "../components/FilterButton.tsx";
import {useSearchParams} from "react-router-dom";

const StatusList = [
    {
        title: "Alive"
    },
    {
        title: "Dead"
    },
    {
        title: "Unknown"
    }
]
const SpeciesList = [
    {
        title: "Alien"
    },
    {
        title: "Animal"
    },
    {
        title: "Human"
    },
    {
        title: "Humanoid"
    },
    {
        title: "Mythological Creature"
    },
    {
        title: "Robot"
    },
    {
        title: "Unknown"
    },
]
const GenderList = [
    {
        title: "Female"
    },
    {
        title: "Male"
    },
    {
        title: "Genderless"
    },
    {
        title: "Unknown"
    }
]

const Filters = ({onClose}: {onClose?: () => void}) => {
    // Use the search params to filter content
    const [searchParams, setSearchParams] = useSearchParams();

    // Set a new filter value updating the search params
    const setFilter = (type: string, value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        // Reset the paginator filter
        newParams.set('page', "1");
        newParams.set(type, value);
        setSearchParams(newParams);
    }

    // Clear all the filters and set the current page to number 1
    const clearFilters = () => {
        let query = searchParams.get('query');
        if(hasFilters()){
            if(query) {
                setSearchParams({ page: "1", query: query });
            }
            else {
                setSearchParams({ page: "1" });
            }
        }
    }

    // Check if exists any filter
    const hasFilters = () => {
        let status = searchParams.get("status");
        let gender = searchParams.get("gender");
        let specie = searchParams.get("specie");

        return (status || gender || specie);
    }

    // Compare a current filter with a given one
    const checkFilter = (type, status) => {
        let currentStatus = searchParams.get(type);
        return currentStatus === status;
    }

    // Button to reset the filters
    const clearFiltersButton = () => {
        return <button className={`flex mx-auto ${hasFilters() ? 'text-indigo-500' : 'text-gray-400'} `}
                       onClick={() => {
                           clearFilters()
                       }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
            </svg>
            <p className="ml-1">Clear filters</p>
        </button>
    }

    // Button to close the filters modal on mobile
    const closeFiltersButton = () => {
        return <button className={`flex mx-auto absolute right-5 top-5 lg:hidden`}
                       onClick={() => onClose()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="size-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
            </svg>
        </button>
    }

    return <div className="bg-gray-100 rounded-lg shadow-sm p-4 min-h-[100vh] lg:min-h-[100px]">
        <p className="text-lg font-semibold mb-10 text-center">Filters</p>

        <p className="mb-1">Status</p>
        <div className="flex flex-wrap">
            {StatusList.map((item) => <FilterButton key={item.title} active={checkFilter("status", item.title)} title={item.title}
                                                    onClick={() => {
                                                        setFilter("status", item.title)
                                                    }}/>)}
        </div>
        <hr className="my-6"/>
        <p className="mb-1">Specie</p>
        <div className="flex flex-wrap">
            {SpeciesList.map((item) => <FilterButton key={item.title} active={checkFilter("specie", item.title)} title={item.title}
                                                     onClick={() => {
                                                         setFilter("specie", item.title)
                                                     }}/>)}
        </div>
        <hr className="my-6"/>
        <p className="mb-1">Gender</p>
        <div className="flex flex-wrap">
            {GenderList.map((item) => <FilterButton key={item.title} active={checkFilter("gender", item.title)} title={item.title}
                                                    onClick={() => {
                                                        setFilter("gender", item.title)
                                                    }}/>)}
        </div>
        <hr className="my-6"/>
        {clearFiltersButton()}
        {closeFiltersButton()}
    </div>
}

export default Filters;
