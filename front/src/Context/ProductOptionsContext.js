import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const OptionContext = createContext();

export default function ProductOptionContext(props) {
  //This is for the type of product id

  //This is the settings for that model
  const [Processor, setProcessor] = useState([{}]);
  const [RAM, setRAM] = useState([{}]);
  const [Graphics, setGraphics] = useState([{}]);
  const [Storage, setStorage] = useState([{}]);

  useEffect(() => {}, [Processor]);
  useEffect(() => {}, [RAM]);
  useEffect(() => {}, [Graphics]);
  useEffect(() => {}, [Storage]);

  //This is to get the information for that product
  const getData = async (something) => {
    await axios
      .get(`${something}`)
      .then((res) => {
        let { processors, graphics, storage, ram } = res.data;
        setProcessor([...processors]);
        setGraphics([...graphics]);
        setStorage([...storage]);
        setRAM([...ram]);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <OptionContext.Provider
      value={{ Processor, RAM, Graphics, Storage, getData }}>
      {props.children}
    </OptionContext.Provider>
  );
}
