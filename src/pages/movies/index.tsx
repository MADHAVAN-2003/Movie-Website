import React, { SetStateAction, useContext, useState } from "react";
import Layout from "../../Layout";
import { Box, InputAdornment, Paper, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import searchIcon from "../../assets/icons/icon-search.svg";
import MovieList from "../../Components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../Context/movie-context";


const Movie = () =>{
    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useState<MovieDataType[]>([]);
    const { state } = useContext(MovieContext);
    const { movies } = state;
    const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
        setSearch(e.target.value);
        const newList = movies.filter((searchMovie)=>{
            searchMovie.title.toLowerCase().includes(search.toLowerCase())
        })
        setSearchList(newList)
      };
    return(
        <Layout>
        <Box>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              border: "none",
              borderRadius: "default",
              backgroundColor: "#10141f",
              padding: 1,
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                color: "White",
                border: "none",
                backgroundColor: "#10141f",
              }}
              placeholder="Search for Movies Or Tv-Series"
              value={search}
              onChange={handleSearch}
              startAdornment={
                <InputAdornment position="start">
                  <img src={searchIcon} alt="searchIcon" height={20} width={30} />
                </InputAdornment>
              }
            />
          </Paper>
        </Box>
        <Box paddingY={2} paddingX={4}>
          {search === "" ? (
            <Box width={"100%"}>
              <Box width={"100%"}>
                <Typography variant="h5" component="h1" my={6}>
                  Movies
                </Typography>
                <MovieList recommendList={search === "" ? movies : searchList} />
              </Box>
            </Box>
          ) : (
              <Box width="100%">
                <Typography>Found{searchList.length} results for "{search}"{""}</Typography>
                <MovieList recommendList={searchList} />
              </Box>
          )}
        </Box>
      </Layout>
    );
}

export default Movie