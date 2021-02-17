import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { connect } from "react-redux";
import * as fetchShows from "../../actions/showsAction";
import { bindActionCreators } from "redux";
import "../../assets/styles/list.styles.css";
import notFound from "../../assets/notFound.png";
import { ResultListStyles } from "../../assets/styles/resultlist.styles";
function ResultsList(props) {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  const ListStyles = makeStyles(() => ({
    gridList: {
      paddingBottom: "4%",
      paddingTop: "4%",
      width: width,
      height: "100%",
    },
  }));
  const classes = ResultListStyles(width);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    //list of search shows results in a grid with the option to favoriter/unfavorite one and click to show more information
    <div className={classes.root}>
      <GridList
        cellHeight={160}
        className={ListStyles().gridList}
        cols={width <= 768 ? 2 : width <= 1240 ? 3 : 6}
      >
        {props.carouselImages.map((tile) => (
          <GridListTile key={tile.show ? tile.show.id : tile.id} cols={1}>
            <Link to={`/shows/${tile.show ? tile.show.id : tile.id}`}>
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={
                  tile.image || (tile.show && tile.show.image)
                    ? tile.show
                      ? tile.show.image.medium
                      : tile.image.medium
                    : notFound
                }
                alt={tile.show ? tile.show.name : tile.name}
              />
            </Link>
            <GridListTileBar
              title={tile.show ? tile.show.name : tile.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                props.favoriteShows.filter(
                  (show) => show.id == (tile.show ? tile.show.id : tile.id)
                ).length < 1 ? (
                  <IconButton
                    aria-label={`star ${
                      tile.show ? tile.show.name : tile.name
                    }`}
                    onClick={(e) =>
                      props.addToFavorite(tile.show ? tile.show : tile)
                    }
                  >
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label={`star ${
                      tile.show ? tile.show.name : tile.name
                    }`}
                    onClick={(e) =>
                      props.removeFromFavorite(tile.show ? tile.show : tile)
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
