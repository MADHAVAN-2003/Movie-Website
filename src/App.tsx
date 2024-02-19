import React from "react";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";
import { MovieProvider } from "./Context/movie-context";
const App = () =>{
    return(
      <MovieProvider>
        <RouterProvider router={Routes}/>
      </MovieProvider>
    );
}

export default App
