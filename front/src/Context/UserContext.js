import React, { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

const initialState = {
  id: "",
};
export default function UserStoreContext(props) {
  const [users, setUsers] = useReducer(userReducer, initialState);
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
}
