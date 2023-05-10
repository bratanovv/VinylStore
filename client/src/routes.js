import Admin from "./page/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, RECORDS_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from "./page/Shop";
import Auth from "./page/Auth";
import RecordPage from "./page/RecordPage";
import Basket from "./page/Basket";

export const authRoutes = [
    {

        path:ADMIN_ROUTE,
        Component: Admin
    } ,
    {
        path:BASKET_ROUTE,
        Component: Basket
    }

]

export const publicRoutes = [
    {

        path:SHOP_ROUTE,
        Component: Shop
    } ,
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {

        path:REGISTRATION_ROUTE,
        Component: Auth
    } ,
    {
        path:RECORDS_ROUTE+'/:id',
        Component: RecordPage
    }



]