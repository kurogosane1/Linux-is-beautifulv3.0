import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

function add(state, action) {
  const newCart = [...state, action.payload];
  localStorage.setItem("cart", newCart);
  return newCart;
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return add(state, action);
    case "DELETE_ADD_CART":
      return state.filter((cart) => cart.id !== action.id);
    case "CHECK_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default function CartStoreContext(props) {
  const initialState = [];
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const checkCart = () => {
    const cartCheck = localStorage.getItem("cart");
    console.log(cartCheck);

    return cartCheck === null
      ? ""
      : dispatch({ type: "CHECK_CART", payload: cartCheck });
  };

  useEffect(() => {
    checkCart();
    console.log(cart);
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}
