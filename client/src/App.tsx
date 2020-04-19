import React from 'react';
import {useRoutes} from "./routes";
import {useSelector} from 'react-redux';

const App = () => {
    const {posts, loading} = useSelector(state => ({
        posts: state.posts.fetchedPosts
    }))


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
