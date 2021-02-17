export const fetchShows = () => async (dispatch) => {
  let shows = [];
  //retrieve first 3 pages of results to set the shows state
  fetch(`http://api.tvmaze.com/shows?page=0`)
    .then((response) => response.json())
    .then((json) => {
      shows = json;
    })
    .then(() => {
      fetch(`http://api.tvmaze.com/shows?page=1`)
        .then((response) => response.json())
        .then((json) => {
          shows = shows.concat(json);
        });
    })
    .then(() => {
      fetch(`http://api.tvmaze.com/shows?page=2`)
        .then((response) => response.json())
        .then((json) => {
          shows = shows.concat(json);
        })
        .then(() => {
          dispatch({ type: "VIEW_SHOWS", payload: shows });
        });
    });
};

export const fetchList = (shows) => async (dispatch) => {
  //list of genres that are displayed in the homepage
  let indexesArray = [];
  let genres = shows
    .map((item) => item.genres)
    .reduce((prev, curr) => prev.concat(curr), [])
    .filter((item, i, arr) => arr.indexOf(item) === i);
  let i = 0;
  while (indexesArray.length < 6) {
    // uncomment to load random categories every time
    // let randomIndex = Math.floor(Math.random() * genres.length)
    // let element = genres.splice(randomIndex, 1);
    let element = genres.splice(i, 1);
    indexesArray.push({ genre: element[0] });
    i++;
  }
  dispatch({ type: "FETCH_LISTS", payload: indexesArray });
};

export const fetchCarouselShows = (shows) => async (dispatch) => {
  //set featured shows with high rating to be displayed in banner of homepage
  let featuredShows = [];
  shows.forEach((show) => {
    if (show.rating && show.rating.average > 8.7 && featuredShows.length < 10) {
      featuredShows.push(show);
    }
  });
  dispatch({ type: "FETCH_CAROUSEL", payload: featuredShows });
};

export const addToFavorite = (show) => async (dispatch) => {
  //add a show to favorites list
  dispatch({ type: "ADD_TO_FAVORITE", payload: show });
};
export const removeFromFavorite = (show) => async (dispatch) => {
  //remove a show from favorites list
  dispatch({ type: "REMOVE_FROM_FAVORITE", payload: show });
};
