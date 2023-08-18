import {
  FAILED,
  GETALLPRODUCTSSUCCESS,
  LOADING,
} from "../actiontypes/productstype";

const initialState = {
  loading: true,
  prods: [],
  error: null,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };

    case GETALLPRODUCTSSUCCESS:
      return { ...state, prods: payload, loading: false };

    case FAILED:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
