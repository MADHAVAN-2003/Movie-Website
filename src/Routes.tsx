import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from "./pages/movies";
import Tvseries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";

export const Routes = createBrowserRouter([
    {
        path :"/",
        element : <Home/>,
        errorElement : <Error/>
    },
    {
        path :"/movie",
        element : <Movie/>,
        errorElement : <Error/>
    },
    {
        path :"/tv-series",
        element : <Tvseries/>,
        errorElement : <Error/>
    },
    {
        path :"/bookmark",
        element : <Bookmark/>,
        errorElement : <Error/>
    }
])