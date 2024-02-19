import { Box, Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
    recommendList : MovieDataType[]
}

const MovieList = ({recommendList}: MovieListProps) =>{
    console.log("The recommend List :" , recommendList)
    return(
        <Box sx={{
            display : "flex",
            gap : 2,
            // overflowX : "scroll"
        }}>{recommendList.map((movie)=>{
            return(
                <Grid item key={movie.id}>
                    <Paper elevation={0} sx={{ backgroundColor : "transparent"}}>
                        <MovieCard movie = {movie}></MovieCard>
                    </Paper>
                </Grid>
            );
        })}
        </Box>
    )
}

export default MovieList