const INITIAL_STATE = {
  searchTerm: '',
};

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_SET':
      return { searchTerm: action.searchVal };
    default: return state;
  }
}

export default searchReducer;
