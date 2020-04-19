import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import {BigBanner} from "./components/BigBanner/BigBanner";
import {SignInUpPage} from "./pages/SignInUpPage";


export const useRoutes = (isAuthenticated: string | null = null, isAdmin: boolean = false) => {
    if (isAuthenticated) {
        if (isAdmin) {
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
                {/*<BigBanner imgUri={'https://www.lg.com/ru/images/MN/features/Monitor_Banner_Hero_2018-02_OBS_01-min.jpg'}/>*/}
                <Switch>
                    <Route path="/sign">
                        <SignInUpPage/>
                    </Route>
                </Switch>
            </div>
        )
    }

    return (
        <div className="main__wrapper">
            <Navbar/>
            {/*<BigBanner imgUri={'https://www.lg.com/ru/images/MN/features/Monitor_Banner_Hero_2018-02_OBS_01-min.jpg'}/>*/}
            <Switch>

            </Switch>
        </div>
    )
}
