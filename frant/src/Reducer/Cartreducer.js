import { Add_To_Cart, Empty_Cart, Remove_From_Cart } from "../Store/Type";

const initial = {
  cart: [],
  cartlength: 0,
  subTotal: 0,
  items: 0,
};

const cartreducer = (state = initial, action) => {
  switch (action.type) {
    case Add_To_Cart:
      const same = state.cart.find((item) => item._id === action.payload._id);
      if (same) {
        return {
          ...state,
          cartlength: state.cart.length,
          singlelength: state.cart.length,
        };
      } else {
        state.cart.push(action.payload);
        let sum = 0;
        state.cart.map((itm) => (sum = itm.cart * Number(itm.price)));
        state.subTotal = state.subTotal + sum;
        let totalITEM = 0;
        state.cart.map((itm) => (totalITEM = itm.cart));
        state.items = state.items + totalITEM;

        return {
          ...state,
          cart: state.cart,
          cartlength: state.cart.length,
          items: state.items,
        };
      }
    case Remove_From_Cart:
      state.items = state.items - action.payload.cart;
      let index = action.payload.index,
        total = 0;
      state.cart.splice(index, 1);
      state.cart.map((itm) => (total = total + itm.cart * Number(itm.price)));
      state.subTotal = total;
      return {
        ...state,
        cart: state.cart,
        cartlength: state.cart.length,
        items: state.items,
      };
    case Empty_Cart:
      state.cart.length = 0;
      state.cart.subTotal = 0;
      state.items = 0;
      return {
        ...state,
        cart: state.cart,
        cartlength: state.cart.length,
        items: state.items,
      };
    default:
      return state;
  }
};

export default cartreducer;
