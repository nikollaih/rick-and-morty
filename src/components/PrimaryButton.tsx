const PrimaryButton = (
    {
        title,
        className,
        onClick,
        ...props
    }: {
        props?: React.HTMLAttributes<HTMLButtonElement>,
        className?: string
        title: string,
        onClick?: () => void,
    }) =>
    <button {...props} className={`bg-indigo-500 text-white py-1 px-3 rounded-md hover:bg-indigo-700 ${className}`} onClick={() => {onClick()}}>
        {title}
    </button>

export default PrimaryButton;
