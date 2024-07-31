import React from 'react';
import { useSearchParams } from 'react-router-dom';

interface IPaginatorProps {
    pages: number;
}

const Paginator: React.FC<IPaginatorProps> = ({ pages }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    // After pressing a new page it will be set in the search params
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= pages && page !== currentPage) {
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.set('page', page.toString());
            setSearchParams(newParams);
        }
    };

    // Generate an array with the pages list
    const getDisplayedPages = () => {
        const pageNumbers = [];

        // Always include the first page
        pageNumbers.push(1);

        // Pages around the current page
        for (let i = Math.max(2, currentPage - 2); i <= Math.min(pages - 1, currentPage + 2); i++) {
            pageNumbers.push(i);
        }

        // Add the latest page always
        pageNumbers.push(pages);

        return pageNumbers;
    };

    if (pages <= 1) return null;

    const displayedPages = getDisplayedPages();

    return (
        <div className="flex justify-center mt-4 flex-wrap gap-2">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
            >
                Previous
            </button>
            {displayedPages.map((page, index) => (
                <React.Fragment key={page}>
                    {index > 0 && page - displayedPages[index - 1] > 1 && (
                        <span className="px-4 py-2">...</span>
                    )}
                    <button
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 border rounded ${
                            page === currentPage
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                        {page}
                    </button>
                </React.Fragment>
            ))}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pages}
                className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
            >
                Next
            </button>
        </div>
    );
};

export default Paginator;
