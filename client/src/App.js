import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/UserApi";
import {Spinner} from "react-bootstrap";

const App = observer(() => {

    const {user} = useContext(Context)
    const[loading,setLoading]= useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            check().then(data=>{
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(()=>setLoading(false))
        },1000)

    },[])

    if(loading){

        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <AppRouter></AppRouter>

        </BrowserRouter>
    );
});

export default App;
