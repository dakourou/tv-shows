import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import * as fetchShows from "../../actions/showsAction";
import { bindActionCreators } from "redux";
import "../../assets/styles/list.styles.css";
import { useLocation, useHistory } from "react-router-dom";
import ResultsList from "../../components/searchResults/ResultsList.component";
import { Typography } from "@material-ui/core";
import { FavoritesStyles } from "../../assets/styles/favorites.styles";

function Favorites(props) {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const classes = FavoritesStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    //favorites page: includes theshows that the user has "starred"
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h5" noWrap style={{ color: "white" }}>
          My List
        </Typography>
      </div>
      {props.favoriteShows.length > 0 ? (
        <ResultsList carouselImages={props.favoriteShows}></ResultsList>
      ) : (
        <div
          style={{
            marginTop: 60,
            paddingBottom: 500,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" noWrap style={{ color: "white" }}>
            {" "}
            No Favorite Shows Added
          </Typography>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    favoriteShows: state.show.favoriteShows,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...fetchShows,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
