import React, { ReactNode, createContext, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";

interface MovieContextProps {
    children : ReactNode
}
interface MovieState {
    movies : MovieDataType[]
}


const MovieList : MovieDataType[] = moviesData;

const intialMovieState : MovieState = {
    movies : MovieList 
}
interface MovieAction {
    type : string,
    id : string
}

const MovieReducer = (state : MovieState , action : MovieAction) : MovieState =>{
    switch(action.type){
        case "TOOGLE BOOKMARK":
            return{
                ...state,
                movies: state.movies.map((movie)=> {
                    if(movie.id === action.id){
                        return {...movie, isBookmarked : !movie.isBookmarked}
                    }
                    return movie
                })
            };
        default:
            return state;
    }
}

export const MovieContext = createContext<{
    state : MovieState,
    dispatch : React.Dispatch<MovieAction>
}>({
    state :  intialMovieState,
    dispatch : ()=> {}
} 
)

export const MovieProvider = ({children} : MovieContextProps)=>{
    const [state , dispatch] = useReducer(MovieReducer , intialMovieState);
    return(
        <MovieContext.Provider value={{state,dispatch}}>
            {children}
        </MovieContext.Provider>
    );

}