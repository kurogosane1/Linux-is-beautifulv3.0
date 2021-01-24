import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserStoreContext from "./Context/UserContext";
import CartStoreContext from "./Context/CartContext";
import ProductDataContext from "./Context/ProductData";
import Footer from "./Layout/Footer";

ReactDOM.render(
  <>
    <React.StrictMode>
      <UserStoreContext>
        <CartStoreContext>
          <ProductDataContext>
            <App />
          </ProductDataContext>
        </CartStoreContext>
      </UserStoreContext>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
