import React from 'react';
import {Routes, Route} from 'react-router'
// import {Switch1, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            { isAuth && authRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>} exact></Route>
            )}
            {  publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>} exact></Route>
            )}
        </Routes>
    );
};

export default AppRouter;