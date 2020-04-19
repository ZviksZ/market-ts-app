import React from 'react';
import {useRoutes} from "./routes";
import {useSelector} from 'react-redux';
import {AppState} from './redux/store';

const App = () => {
    const {userId} = useSelector((state: AppState) => ({
        userId: state.auth.userId
    }))


    const routes = useRoutes(userId)

    /*if (!ready) {
        return <Loader/>
    }*/

    return (
        <>
            {routes}
        </>
    )
}



export default App
