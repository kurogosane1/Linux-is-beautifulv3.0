import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

function add(state, action) {
  const newCart = [...state, action.payload];
  localStorage.setItem("cart", JSON.stringify(newCart));
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

function check(state, action) {
  const cartCheck = JSON.parse(localStorage.getItem("cart"));
  return cartCheck;
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return add(state, action);
    case "DELETE_ADD_CART":
      return deleteCart(state, action);
    case "CHECK_CART":
      return check(state, action);
    default:
      return state;
  }
};

export default function CartStoreContext(props) {
  const initialState = [];
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const checkCart = () => {
    const cartCheck = JSON.parse(localStorage.getItem("cart"));
    return cartCheck === null ? "" : dispatch({ type: "CHECK_CART" });
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
