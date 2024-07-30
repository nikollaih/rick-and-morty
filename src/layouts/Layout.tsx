import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div className="layout m-0 p-4">
            <div className="w-[200px] mx-auto">
                <Link to="/" >
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Rick And Morty" width="200px"
                         className="mx-auto mb-4"/>
                </Link>
            </div>
            <div className="container mx-auto">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;
