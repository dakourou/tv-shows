export const fetchSearchResults = (value) => async (dispatch) => {
  //fetch search results based on query term
  fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: "SEARCH_SHOW", payload: json });
    });
};

export const setQueryTerm = (value) => async (dispatch) => {
  //set query term as typed by the user
  dispatch({ type: "SET_TERM", payload: value });
};
