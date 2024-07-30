import './skeleton.css';

const CharacterViewSkeleton = () => {
    return <div className="grid grid-cols-1 max-w-[400px] mx-auto animate-pulse text-center">
        <div className="h-[200px] w-[200px] bg-gray-200 mb-4 mx-auto rounded-full"/>
        <div className="p-5 bg-gray-200 mb-4 rounded-md"/>
        <div className="p-5 h-52 bg-gray-200 mb-4 rounded-md"/>
        <div className="p-5 h-40 bg-gray-200 mb-2 rounded-md"/>
        <div className="flex align-end items-end justify-between">
            <div/>
            <div className="p-5 bg-gray-200 w-1/2 rounded-md"/>
        </div>
    </div>
}

export default CharacterViewSkeleton;
