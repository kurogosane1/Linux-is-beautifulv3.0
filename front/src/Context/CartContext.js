import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload];
    case "DELETE_ADD_CART":
      return state.filter((cart) => cart.id !== action.id);
    default:
      return state;
  }
};

const initialState = [
  {
    id: "",
    PurchaseType: "",
    Config: {},
    Cost: 0,
  },
];
export default function CartStoreContext(props) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {}, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}
