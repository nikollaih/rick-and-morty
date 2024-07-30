import HomePage from "./pages/Home.tsx";
import ViewCharacterPage from "./pages/ViewCharacter";

const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/characters/:characterId',
        element: <ViewCharacterPage />
    },
];

export default routes;
