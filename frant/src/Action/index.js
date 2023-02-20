import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from "../Store/Type";

export const addcart = (data) => {
  return async (product) => {
    product({
      type: Add_To_Cart,
      payload: data,
    });
  };
};

export const removecart = (data) => {
  return async (product) => {
    product({
      type: Remove_From_Cart,
      payload: data,
    });
  };
};

export const emtycart = (data) => {
  return async (product) => {
    product({
      type: Empty_Cart,
      payload: data,
    });
  };
};
