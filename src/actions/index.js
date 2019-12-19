const dataLoaded = newData => {
  return {
    type: "DATA_LOADED",
    payload: newData
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

export { dataLoaded, dataRequsted, dataError, findItems, filterItems };