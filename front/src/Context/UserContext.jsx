import React, { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      localStorage.setItem("isL", action.userInfo.isLoggedIn);
      return { ...state, ...action.userInfo };
    case "LOGUSER_OUT":
      return { id: "", isLoggedIn: false };
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

  useEffect(() => {}, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
}
