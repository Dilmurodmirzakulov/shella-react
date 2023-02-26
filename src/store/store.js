/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const states = {
  modals: {
    cartModal: false,
    authModal: false,
    searchModal: false,
    serviceModal: false,
    profileModal: false,
    favoritesModal: false,
  },
  cart: [],
  favorites: [],
  prAlertShow: false,
};

const modalsReducer = (state = states.modals, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return { ...state, cartModal: true };
    case "CLOSE_CART":
      return { ...state, cartModal: false };
    case "SHOW_AUTH":
      return { ...state, authModal: true };
    case "CLOSE_AUTH":
      return { ...state, authModal: false };
    case "SHOW_SEARCH":
      return { ...state, searchModal: true };
    case "CLOSE_SEARCH":
      return { ...state, searchModal: false };
    case "SHOW_SERVICE":
      return { ...state, serviceModal: true };
    case "CLOSE_SERVICE":
      return { ...state, serviceModal: false };
    case "SHOW_PROFILE":
      return { ...state, profileModal: true };
    case "CLOSE_PROFILE":
      return { ...state, profileModal: false };
    case "SHOW_FAVORITES":
      return { ...state, favoritesModal: true };
    case "CLOSE_FAVORITES":
      return { ...state, favoritesModal: false };
    default:
      return state;
  }
};

const cartReducer = (state = states.cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.find((i) => i.id == action.payload);
      if (item) {
        return state.map((i) => {
          if (i.id == action.payload) {
            return { id: i.id, q: i.q + 1 };
          }
          return i;
        });
      } else return [...state, { id: action.payload, q: 1 }];
    case "ADD_ALL_TO_CART":
      const arrId = action.payload;
      const allFavorites = arrId.map((x) => {
        const item = state.find((i) => i.id == x);
        if (item) {
          return null;
        } else return { id: x, q: 1 };
      });
      const addedFav = allFavorites.filter((x) => x != null);
      console.log("addedFav", addedFav);
      return [...state, ...addedFav];
    case "REMOVE_FROM_CART":
      const removeItem = state.find((i) => i.id == action.payload);
      if (!removeItem) {
        return;
      }
      if (removeItem.q == 1) {
        return state.filter((i) => i.id != action.payload);
      } else {
        return state.map((i) => {
          if (i.id == action.payload) {
            return { id: i.id, q: i.q - 1 };
          }
          return i;
        });
      }
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

const prAlert = (state = states.prAlertShow, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.find((i) => i.id == action.payload);
      if (!item) return { ...state, prAlertShow: true };
      break;
    case "REMOVE_PR_ALERT":
      return { ...state, prAlertShow: false };
    default:
      return state;
  }
};

const favoritesReducer = (state = states.favorites, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const item = state.find((i) => i == action.payload);
      if (!item) return [...state, action.payload];
      break;
    case "REMOVE_FROM_FAVORITES":
      const removeItem = state.find((i) => i == action.payload);
      if (!removeItem) {
        return;
      }
      return state.filter((i) => i != action.payload);
    default:
      return state;
  }
};

const reducers = combineReducers({
  cartReducer,
  modalsReducer,
  favoritesReducer,
});

export default configureStore({
  reducer: reducers,
  devTools: true,
});
