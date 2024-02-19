import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";
import homeIcon from "../assets/icons/icon-nav-home.svg";
import movieIcon from "../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/icons/icon-nav-bookmark.svg";

const navLinks =  [
    {
        name : "Home",
        icon : homeIcon,
        link : "/"
    },
    {
        name : "Movie",
        icon : movieIcon,
        link : "/movie"
    },
    {
        name : "Tv-series",
        icon : tvSeriesIcon,
        link : "/tv-series"
    },
    {
        name : "Bookmark",
        icon : bookmarkIcon,
        link : "/bookmark"
    },
]

const Sidebar = ()=>{
    const {pathname} = useLocation()
    return(
        <Box sx={{
            backgroundColor : "#161d2f",
            borderRadius : 2,
            width : {
                sm : "100%",
                lg : 200
            },
            display : "flex",
            flexDirection : {
                xs : "row",
                lg : "column"
            },
            alignItems : "center",
            justifyContent : "space-between",
            padding : 2,
        }}> 
         {/* --> parent Box */}
            <Box sx={{
                display : "flex",
                flexDirection : {
                    xs : "row",
                    lg : "column",
                },
                alignItems : {
                    xs : "center",
                    lg : "start"
                },
                gap : 5,
                width : "100%"
            }} > {/* --> Content Box */}
                
                <Hidden smDown>
                    <Typography
                        variant="h5"
                        component= "h1"
                        marginY={2}               
                        fontWeight={400}
                        fontSize={18}
                    >MaddieFy</Typography>
                </Hidden> {/* --> Hidden Component Box */}
               
               <Box sx={{
                    paddingY :{
                        xs : "0px",
                        lg : "16px"
                    },
                    display : "flex",
                    flexDirection : {
                        xs : "row",
                        lg : "column"
                    },
                    gap : 4,
               }}>
                {navLinks.map((item)=>{
                    return(
                        <Link 
                            key={item.name}
                            to={item.link}
                            style={{textDecoration : "none"}} 
                            > 
                             <Box sx={{
                                display : "flex",
                                alignItems : "center",
                                gap: 2,
                                textDecoration : "none",
                                color : "white"
                             }}>
                                <img 
                                    src= {item.icon}
                                    alt= {item.name}
                                    style={{
                                        width : "18px",
                                        filter : `${pathname === item.link ? "invert(56%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(81%)" 
                                                                            :"invert(86%)" }`
                                    }}/>
                                <Hidden mdDown>
                                    <Typography>{item.name}</Typography>
                                </Hidden>
                             </Box>
                        </Link>
                    );
                })}
               </Box>
            </Box>
        </Box>
    );
}

export default Sidebar