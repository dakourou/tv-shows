const initialState = {
  searchResults: [],
  searchTerm: "",
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH_SHOW": {
      return { ...state, searchResults: payload };
    }
    case "SET_TERM": {
      return { ...state, searchTerm: payload };
    }
    default:
      return state;
  }
};

export default searchReducer;
