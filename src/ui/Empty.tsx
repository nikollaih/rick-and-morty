const Empty = ({title}: {title: string}) => {
    return <div className="bg-gray-100 flex flex-col items-center justify-center w-full h-52 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ccc"
             className="size-20">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
        </svg>

        <p className="mt-4 text-gray-600">{title}</p>
    </div>
}

export default Empty;
