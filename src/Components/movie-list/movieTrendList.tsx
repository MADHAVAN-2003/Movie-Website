import { Box, Grid, Paper } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import MovieTrendCard from "../MovieCard/MovieTrendCard";

interface MovieTrendListProps {
    trendingList : MovieDataType[]
}

const MovieTrendList = ({trendingList} : MovieTrendListProps) =>{
    console.log("The Trending List :" , trendingList)

    return(
        <Box sx={{
            display : "flex",
            gap : 2,
            // overflowX : "scroll"
        }}>{trendingList.map((movie)=>{
            return(
                <Grid item key={movie.id}>
                    <Paper elevation={0} sx={{ backgroundColor : "transparent"}}>
                        <MovieTrendCard movie = {movie}></MovieTrendCard>
                    </Paper>
                </Grid>
            );
        })}

        </Box>
    );
}

export default MovieTrendList