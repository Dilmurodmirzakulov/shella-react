export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};
export const addAllToCart = (arr) => {
  return {
    type: "ADD_ALL_TO_CART",
    payload: arr,
  };
};
export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
export const showCart = () => {
  return {
    type: "SHOW_CART",
  };
};
export const closeCart = () => {
  return {
    type: "CLOSE_CART",
  };
};
export const showAuth = () => {
  return {
    type: "SHOW_AUTH",
  };
};
export const closeAuth = () => {
  return {
    type: "CLOSE_AUTH",
  };
};
export const showSearch = () => {
  return {
    type: "SHOW_SEARCH",
  };
};
export const closeSearch = () => {
  return {
    type: "CLOSE_SEARCH",
  };
};
export const showService = () => {
  return {
    type: "SHOW_SERVICE",
  };
};
export const closeService = () => {
  return {
    type: "CLOSE_SERVICE",
  };
};

export const showProfile = () => {
  return {
    type: "SHOW_PROFILE",
  };
};
export const closeProfile = () => {
  return {
    type: "CLOSE_PROFILE",
  };
};

export const showFavorites = () => {
  return {
    type: "SHOW_FAVORITES",
  };
};
export const closeFavorites = () => {
  return {
    type: "CLOSE_FAVORITES",
  };
};

export const addToFavorites = (id) => {
  return{
    type: "ADD_TO_FAVORITES",
    payload: id
  }
}
export const removeFromFavorites = (id) => {
  return{
    type: "REMOVE_FROM_FAVORITES",
    payload: id
  }
}
export const removePrAlert = () => {
  return {
    type: "REMOVE_PR_ALERT",
  }
}