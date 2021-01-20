import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

export const ProductDataContext = createContext();

export default function ProductData(props) {
  //This is identify the type of Category they are looking for
  const [category, setCategory] = useState({
    ProductName: "",
    ProductCategory: "",
  });

  //This is the settings for that model
  const [Processor, setProcessor] = useState([{}]);
  const [RAM, setRAM] = useState([{}]);
  const [Graphics, setGraphics] = useState([{}]);
  const [Storage, setStorage] = useState([{}]);

  useEffect(() => {}, [Processor]);
  useEffect(() => {}, [RAM]);
  useEffect(() => {}, [Graphics]);
  useEffect(() => {}, [Storage]);
  useEffect(() => {}, [category]);

  //This is to retrieve the data for that product
  const getInformation = async (url, data) => {
    console.log(url);
    await setCategory({
      ProductName: data.ProductName,
      ProductCategory: data.ProductCategory,
    });
    console.log(data, category);
    await axios
      .get(url)
      .then((response) => console.log(response.data))
      .catch((err) => err.message);
  };

  return (
    <ProductDataContext.Provider
      value={{ category, Processor, RAM, Graphics, Storage, getInformation }}>
      {props.children}
    </ProductDataContext.Provider>
  );
}
