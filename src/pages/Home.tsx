import React from "react";
import SearchBar from "../ui/SearchBar.tsx";
import CharactersList from "../ui/CharactersList.tsx";
import Filters from "../ui/Filters.tsx";


const HomePage: React.FC = () => {
    return <div>
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="hidden lg:grid lg:col-span-1">
                <Filters />
            </div>
            <div className="lg:col-span-3">
                <CharactersList />
            </div>
        </div>
    </div>;
}

export default HomePage;
