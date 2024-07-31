import HomePage from "./pages/Home.tsx";
import ViewCharacterPage from "./pages/ViewCharacter";
import FavoritesPage from "./pages/Favorites";

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/characters/:characterId',
        element: <ViewCharacterPage />
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
];

export default routes;
