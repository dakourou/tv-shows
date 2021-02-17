import React, { useState, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as fetchShows from "../../actions/showsAction";
import { bindActionCreators } from "redux";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import "../../assets/styles/list.styles.css";
import notFound from "../../assets/notFound.png";
import { ShowListStyles } from "../../assets/styles/showslist.styles";
import { makeStyles } from "@material-ui/core/styles";

function ShowsList(props) {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const classes = ShowListStyles(width);
  const ListStyles = makeStyles(() => ({
    gridList: {
      paddingBottom: 30,
      paddingTop: 30,
      flexWrap: "nowrap",
      transform: "translateZ(0)",
      alignItems: "left",
      width: width,
    },
  }));
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    //a list of shows with the option to favorite/unfavorite one and click to show more information
    <div className={classes.root}>
      <GridList
        className={ListStyles().gridList}
        cols={width <= 768 ? 3 : width <= 1240 ? 5 : 8}
      >
        {props.carouselImages
          .filter((item, index) => index < 20)
          .map((tile, i) => (
            <GridListTile key={i} className="tile">
              <Link to={`/shows/${tile ? tile.id : ""}`}>
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={tile.image ? tile.image.medium : notFound}
                  alt={tile.name}
                />
              </Link>
              <GridListTileBar
                title={tile.name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  !props.favoriteShows.includes(tile) ? (
                    <IconButton
                      aria-label={`star ${tile.name}`}
                      onClick={(e) => props.addToFavorite(tile)}
                    >
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label={`star ${tile.name}`}
                      onClick={(e) => props.removeFromFavorite(tile)}
                    >
                      <StarIcon className={classes.title} />
                    </IconButton>
                  )
                }
              />
            </GridListTile>
          ))}
      </GridList>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
