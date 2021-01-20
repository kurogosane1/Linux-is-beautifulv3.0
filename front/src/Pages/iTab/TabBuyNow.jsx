import React, { useEffect, useContext, useState } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { useRouteMatch, useHistory } from "react-router-dom";
import Loading from "../../Loading";

export default function TabBuyNow() {
  let history = useHistory();
  const { url } = useRouteMatch();

  //This is to get the information to the Context API
  const {
    getInformation,
    RAM,
    Processor,
    Category,
    Storage,
    Graphics,
  } = useContext(ProductDataContext);

  //This is the to set the default selection
  const [Selection, setSelection] = useState({
    Processor: "",
    RAM: "",
    GPU: "",
    Storage: "",
    Type: "Tablet",
  });

  //This is to get the cost
  const [cost, setCollection] = useState({
    processorCost: 0,
    ramCost: 0,
    gpuCost: 0,
    storageCost: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, [Processor]);
  useEffect(() => {}, [RAM]);
  useEffect(() => {}, [Graphics]);
  useEffect(() => {}, [Storage]);
  useEffect(() => {}, [Selection]);
  useEffect(() => {}, [Category]);

  //This is to fetch the information regarding the product
  useEffect(() => {
    //This is to send it to the Context Side
    const data = {
      ProductName: "iTab",
      ProductCategory: "Tablet",
    };
    getInformation(url, data);
  }, [Category]);

  return (
    <div>
      <h2>This is the buy Now section of the tab</h2>
    </div>
  );
}
