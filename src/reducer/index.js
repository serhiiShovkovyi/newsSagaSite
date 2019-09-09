const initialState = {
  currentNews: [],
  loading: false,
  country: 'world',
  category:'all',
  source: 'all'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, loading: true };

    case "NEWS_RECEIVED":
      return { ...state, currentNews: action.payload.articles, loading: false };

    case "COUNTRY_SET":
      return{...state, country: action.country};

    case "CATEGORY_SET":
      return {...state, category: action.category};

    case "SOURCE_SET":
      return {...state, source: action.source};
    default:
      return state;
  }
};

export default reducer;
