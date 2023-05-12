import React, {useContext} from 'react';
import {Routes, Route} from 'react-router'
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../page/Shop";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            { user.isAuth && authRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>} exact></Route>
            )}
            {  publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>} exact></Route>
            )}
            <Route path="*" element={<Shop/>}></Route>
        </Routes>
    );
};

export default AppRouter;