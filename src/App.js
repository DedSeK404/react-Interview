import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallproducts } from "./JS/actions/productsactions";
import ProdCard from "./Components/Card";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproducts());
  }, []);
  const products = useSelector((state) => state.productsReducer.prods);
  const loading = useSelector((state) => state.productsReducer.loading);
  console.log(products);

  return (
    <div className="App">
      <div className="Box">
        {products.map((prod) => (
          <ProdCard data={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
