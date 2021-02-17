const initialState = {
    allShows: [],
    lists: [],
    featuredShows: [],
    favoriteShows: []
  };
  
  const showsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'VIEW_SHOWS': {
        return { ...state, allShows: payload};
      }
      case 'FETCH_LISTS': {
        return { ...state, lists: payload};
    }
    case 'FETCH_CAROUSEL': {
      return { ...state, featuredShows: payload};
    }
    case 'ADD_TO_FAVORITE': {
        return { ...state, favoriteShows: state.favoriteShows.concat(payload)};
    }
    case 'REMOVE_FROM_FAVORITE': {
        return { ...state, favoriteShows: state.favoriteShows.filter(function(value){ return value!=payload;})};
    }
    
      default:
        return state;
    }
  };
  
  export default showsReducer;