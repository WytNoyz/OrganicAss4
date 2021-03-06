export const incrementCartCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

export const removeProductFromCart = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
};
