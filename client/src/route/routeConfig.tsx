import NotFoundPage from '../pages/NotFoundPage'
import UsersPage from "../pages/UsersPage";
import Auth from "../pages/Auth";
import {AppRoutes} from "./routes";


const {
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    USERS_ROUTE,
    NOT_FOUND
} = AppRoutes

export const routeConfig = [
    {
        path: USERS_ROUTE,
        element: <UsersPage />
    },
    {
        path: MAIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: NOT_FOUND,
        element: <NotFoundPage />
    }
]


