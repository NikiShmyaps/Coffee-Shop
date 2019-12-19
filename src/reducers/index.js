const initialState = {
  data: [],
  loading: true,
  error: false,
  update: false
};

const reducer = (state = initialState, action) => {
  const {type, payload, findItems, filter} = action;
  switch (type) {
    case "DATA_LOADED":
      return {
        data: payload,
        loading: false,
        error: false
      };
    case "DATA_REQUSTED":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "FIND_ITEM":
      const newItems = [];
      state.data.forEach(el => {
        if (el.name.toLowerCase().includes(findItems.toLowerCase())) {
          newItems.push(el);
        }
      });
      if (newItems.length > 0) {
        return {
          ...state,
          data: newItems
        };
      } else {
        return {
          ...state,
          data: newItems
        };
      }
    case "FILTER_ITEMS":
      const filterData = state.data.filter(el => el.country === filter);
      return {
        ...state,
        data: filterData
      }
    default:
      return state;
  }
};

export default reducer;