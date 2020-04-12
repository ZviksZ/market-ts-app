import React from 'react';
import {useRoutes} from "./routes";

const App = () => {

    const routes = useRoutes(true)

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
