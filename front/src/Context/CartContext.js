import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

function add(state, action) {
  const newCart = [...state, action.payload];
  localStorage.setItem("cart", newCart);
  return newCart;
}
function deleteCart(state, action) {
  const newCart = state.filter((cart) => cart.id !== action.id);
  if (newCart.length === 0) {
    localStorage.removeItem("cart");
  } else {
    localStorage.setItem("cart", newCart);
  }
  return newCart;
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return add(state, action);
    case "DELETE_ADD_CART":
      return deleteCart(state, action);
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
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}
