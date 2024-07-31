import {Link, Outlet, useNavigate} from 'react-router-dom';
import React from "react";
import {useLocation} from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getLeftContent = () => {
        return (location.pathname === "/") ?
            <div className="w-[110px] hidden lg:block"/> :
            <Link to="#" onClick={() => { navigate(-1) }}>
                <div className="flex right-10 top-10 cursor-pointer hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>

                    <p className="ml-2 hidden lg:block">Go Back</p>
                </div>
            </Link>
    }

    return (
        <div className="layout m-0 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    { getLeftContent() }
                    <div className="w-[200px]">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Rick And Morty" width="200px"
                                 className="mx-auto mb-4 hover:scale-105"/>
                        </Link>
                    </div>
                    <Link to="/favorites">
                        <div className="flex right-10 top-10 cursor-pointer hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fd3333"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="#fd3333" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                            </svg>
                            <p className="ml-2">Favorites</p>
                        </div>
                    </Link>
                </div>

                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;
