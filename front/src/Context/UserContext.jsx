import axios from "axios";
import React, { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      localStorage.setItem("isL", JSON.stringify(action.userInfo));
      return { ...state, ...action.userInfo };
    case "LOGUSER_OUT":
      localStorage.removeItem("isL");
      return { id: "", isLoggedIn: false };
    case "USER_ALREADY_LOGGED_IN":
      return { ...state, ...action.userInfo };
    default:
      return state;
  }
};

const initialState = {
  id: "",
  isLoggedIn: false,
};
export default function UserStoreContext(props) {
  const [users, setUsers] = useReducer(userReducer, initialState);

  useEffect(() => {
    //Checking if the user is already logged in session
    const check = JSON.parse(localStorage.getItem("isL"));
    // this is to check if the user is already logged in before or not
    if (check) {
      setUsers({ type: "USER_ALREADY_LOGGED_IN", userInfo: check });
    }
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
}
