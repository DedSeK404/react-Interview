import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallproducts } from "./JS/actions/productsactions";
import ProdCard from "./Components/Card";
import CardLoading from "./Components/CardLoading";
import { Pagination } from "flowbite-react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproducts());
  }, []);
  const products = useSelector((state) => state.productsReducer.prods);
  const loading = useSelector((state) => state.productsReducer.loading);

  const [currentPage, setCurrentPage] = useState(1);

  const [prodsPP, setProdsPP] = useState(4);
  const [activePage, setActivePage] = useState(4);
  const handleChange = (number) => {
    setProdsPP(number);
    setActivePage(number);
  };
  const productsPerPage = prodsPP;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const prods = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / productsPerPage);

  return (
    <div className={loading ? "AppLoading" : "App"}>
      {loading ? (
        <CardLoading />
      ) : (
        <>
          <div className="Box">
            {prods.map((prod) => (
              <ProdCard data={prod} key={prod.id} />
            ))}
          </div>
          <div className="paginationContainer">
            <Pagination
              currentPage={currentPage}
              layout="navigation"
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
              totalPages={npage}
            />
            <div>
              <button
                onClick={() => handleChange(4)}
                className={
                  activePage == "4" ? "showButton4active" : "showButton4"
                }
              >
                <i class="bi bi-columns-gap"></i> 4 per Page
              </button>
              <button
                onClick={() => handleChange(8)}
                className={
                  activePage == "8" ? "showButton8active" : "showButton8"
                }
              >
                <i class="bi bi-columns-gap"></i> 8 per Page
              </button>
              <button
                onClick={() => handleChange(12)}
                className={
                  activePage == "12" ? "showButton12active" : "showButton12"
                }
              >
                <i class="bi bi-columns-gap"></i> 12 per Page
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
