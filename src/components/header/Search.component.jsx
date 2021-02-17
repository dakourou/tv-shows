import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { connect } from "react-redux";
import * as fetchSearchResults from "../../actions/searchAction";
import { bindActionCreators } from "redux";
import { useHistory, useLocation } from "react-router-dom";
import { SearchStyles } from "../../assets/styles/search.styles";

function Search(props) {
  const history = useHistory();
  const location = useLocation();
  const classes = SearchStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const editSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      props.setQueryTerm(event.target.value);
      if (location.pathname !== "/searchResults")
        history.push({ pathname: `/searchResults` });
    } else {
      if (location.pathname == "/searchResults")
        history.push({ pathname: `/home` });
    }
  };
  return (
    //the search bar with the search shows functionality
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search"
        value={searchTerm}
        onChange={editSearch}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.search.searchResults,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...fetchSearchResults,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);
