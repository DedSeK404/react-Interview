import { products } from "../../Data/products";
import {
  LOADING,
  GETALLPRODUCTSSUCCESS,
  FAILED,
} from "../actiontypes/productstype";

export const getallproducts = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const prods = await products;
    dispatch({ type: GETALLPRODUCTSSUCCESS, payload: prods });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};
