const defaultFiltersState = {
  title: "",
  period: "All",
};

const filterReducer = (state = defaultFiltersState, action) => {
  switch (action.type) {
    case "SET_TITLE_FILTER":
      return {
        ...state,
        title: action.title,
      };
    case "SET_PERIOD_FILTER":
      return {
        ...state,
        period: action.period,
      };
    default:
      return state;
  }
};

export default filterReducer;
