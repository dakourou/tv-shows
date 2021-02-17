import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Search from "./Search.component";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory, useLocation } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { HeaderStyles } from "../../assets/styles/header.styles";

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  const classes = HeaderStyles();
  const openFavorite = () => {
    if (location.pathname !== "/favorites")
      history.push({ pathname: `/favorites` });
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    //the page header with the Favorites button and search bar
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          {location.pathname === "/home" ? (
            <></>
          ) : (
            <IconButton
              edge="start"
              className={classes.icon}
              color="inherit"
              onClick={(e) => goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography className={classes.title} variant="h6" noWrap>
            BANKeflix
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={(e) => openFavorite()}
          >
            <FavoriteIcon />
          </IconButton>
          <Search></Search>
        </Toolbar>
      </AppBar>
    </div>
  );
}
