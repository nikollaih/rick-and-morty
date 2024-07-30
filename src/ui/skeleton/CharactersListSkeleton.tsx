import './skeleton.css';

const CharactersListSkeleton = () => {
    // Generate an empty card for loading purposes
    const Card = () => {
        return <div
            className="border border-gray-200 rounded-lg bg-gray-100 animate-pulse">
            <div className="w-full h-[300px] bg-gray-200">

            </div>
            <div className="p-5">
                <div className="p-2 bg-gray-200"></div>
                <div className="p-2 bg-gray-200 mt-4 h-6 w-[80px]"></div>
            </div>
        </div>
    }

    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
}

export default CharactersListSkeleton;
