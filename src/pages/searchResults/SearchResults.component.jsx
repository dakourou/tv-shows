import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as fetchSearchResults from "../../actions/searchAction";
import { bindActionCreators } from "redux";
import "../../assets/styles/list.styles.css";
import { useHistory } from "react-router-dom";
import ResultsList from "../../components/searchResults/ResultsList.component";
import { SearchResultsStyles } from "../../assets/styles/searchresults.styles";
import { Typography } from "@material-ui/core";

function SearchResults(props) {
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const classes = SearchResultsStyles(width);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    props.fetchSearchResults(props.queryTerm);
    if (props.queryTerm == "") {
      history.push({ pathname: `/home` });
    }
  }, [props.queryTerm]);
  return (
    //search results page: the user is redirected there when a change at the search bar input is detected
    <div className={classes.root}>
      {props.searchResults.length>0 ? (<ResultsList
        page="searchResults"
        carouselImages={props.searchResults}
      ></ResultsList>) : 
      (<div
        style={{
          marginTop: 60,
          paddingBottom: 500,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" noWrap style={{ color: "white" }}>
          {" "}
          No Results Found
        </Typography>
      </div>)}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    searchResults: state.search.searchResults,
    queryTerm: state.search.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...fetchSearchResults,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
