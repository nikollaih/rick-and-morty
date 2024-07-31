const FilterButton = (
    {
        title,
        onClick,
        active = false
    }:
    {
        key?: string | number
        title: string,
        onClick?: () => void,
        active?: boolean
    }
) => {

    return <button className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 rounded-lg border border-gray-200 hover:bg-indigo-500 hover:text-white cursor-pointer ${active ? 'bg-indigo-500 text-white active' : 'bg-white'}`}
    onClick={() => onClick()}>
        <p>{title}</p>
    </button>
}

export default FilterButton;
