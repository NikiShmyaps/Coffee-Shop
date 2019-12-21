const initialState = {
  data: [],
  loading: true,
  error: false,
  update: false,
  currentCoffee: [
    {
      name: "Black Rifle Coffee",
      country: "Kenya",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/91vwF6Kh8IL._SX522_.jpg",
      price: "19.75$",
      description:
        "Lorem ipsum dolor sit amet"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      return {
        ...state,
        data: action.payload,
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
        if (el.name.toLowerCase().includes(action.findItems.toLowerCase())) {
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
      const filter = action.filter;
      console.log(filter);
      const filterData = state.data.filter(el => el.country === filter);
      return {
        ...state,
        data: filterData
      };

    case "SET-CURRENT-COFFEE":
      const currentItem = action.currentItem;
      const currentCoffee = state.data.filter(el => el.name === currentItem);
      return {
        ...state,
        currentCoffee: currentCoffee
      };
    default:
      return state;
  }
};

export default reducer;