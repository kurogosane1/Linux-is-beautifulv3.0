import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Nav from "./Layout/Nav";
import { Container } from "@material-ui/core";
import MainUser from "./Pages/UserAccount/MainUser";
import Laptop from "./Pages/Laptop/Laptop";
import Tablet from "./Pages/iTab/Tablet";
import Login from "./Pages/Logins/Login";
import Signup from "./Pages/Logins/Signup";
import Cart from "./Pages/Cart/Cart";
import { UserContext } from "./Context/UserContext";
import Main from "./Pages/Main";
import ProductOptionContext from "./Context/ProductOptionsContext";
import { CartContext } from "./Context/CartContext";
import Checkout from "./Pages/Payment/CheckOut";
import Success from "./Pages/Payment/Success";
import Failure from "./Pages/Payment/Failure";
import Footer from "./Layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { users } = useContext(UserContext);
  const { cart, dispatch } = useContext(CartContext);
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-sine", delay: 100 });
  }, []);

  //This is the for stripe to work with this
  const stripePromise = loadStripe(
    process.env.REACT_APP_Stripe_PUBLISHIBLE_KEY
  );

  return (
    <>
      <ScrollToTop />
      <Router>
        <div className="App">
          <Nav />
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/DeepinPro">
                <ProductOptionContext>
                  <Laptop />
                </ProductOptionContext>
              </Route>
              <Route path="/iTab">
                <Tablet />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/SignUp">
                <Signup />
              </Route>
              <Route exact path="/Cart">
                <Cart info={cart} action={dispatch} />
              </Route>
              <Route path={`/${users.id}`}>
                <MainUser />
              </Route>
              <Route path="/Payment">
                <Elements stripe={stripePromise}>
                  <Checkout info={cart} action={dispatch} id={users.id} />
                </Elements>
              </Route>
              <Route path="/Success">
                <Success action={dispatch} />
              </Route>
              <Route path="/Failure">
                <Failure />
              </Route>
            </Switch>
          </Container>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
