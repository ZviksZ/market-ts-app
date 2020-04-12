import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";


export const useRoutes = (isAuthenticated: boolean = false, isAdmin: boolean = false) => {
    if (isAuthenticated) {
        return (
            <div className="main__wrapper">
                <Navbar/>
                <Switch>

                </Switch>
            </div>
        )
    }

    return (
        <div className="main__wrapper">
            <Navbar/>
            <Switch>
                <Redirect to="/todo111"/>
            </Switch>
        </div>
    )
}
