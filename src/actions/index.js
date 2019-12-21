const dataLoaded = items => {
  return {
    type: "DATA_LOADED",
    payload: items
  };
};

const dataRequsted = () => {
  return {
    type: "DATA_REQUSTED"
  };
};

const dataError = () => {
  return {
    type: "DATA_ERROR"
  };
};

const findItems = findItems => {
  return {
    type: "FIND_ITEM",
    findItems: findItems
  };
};

const filterItems = filterTitle => {
  return {
    type: "FILTER_ITEMS",
    filter: filterTitle
  };
};

const setCurrentCoffee = currentCoffee => {
  return {
    type: "SET-CURRENT-COFFEE",
    currentItem: currentCoffee
  };
};

export { 
  dataLoaded, 
  dataRequsted,
  dataError, 
  findItems, 
  filterItems, 
  setCurrentCoffee 
};