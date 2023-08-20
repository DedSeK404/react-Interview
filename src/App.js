import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallproducts } from "./JS/actions/productsactions";
import ProdCard from "./Components/Card";
import CardLoading from "./Components/CardLoading";
import PaginationComponent from "./Components/Pagination";
import { v4 as uuidv4 } from "uuid";

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

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(products);

  let filters = [
    "Electronics",
    "Entertainment",
    "Fashion",
    "Food & Beverage",
    "Health & Wellness",
    "Home",
    "Sports",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = products.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...products]);
    }
  };

  // Pagination for filtered products
  const [currentPageFiltered, setCurrentPageFiltered] = useState(1);

  const [prodsPPFiltered, setProdsPPFiltered] = useState(4);
  const [activePageFiltered, setActivePageFiltered] = useState(4);
  const handleChangeFiltered = (number) => {
    setProdsPPFiltered(number);
    setActivePageFiltered(number);
  };
  const productsPerPageFiltered = prodsPPFiltered;
  const lastIndexFiltered = currentPageFiltered * productsPerPageFiltered;
  const firstIndexFiltered = lastIndexFiltered - productsPerPageFiltered;
  const prodsFiltered = filteredItems.slice(
    firstIndexFiltered,
    lastIndexFiltered
  );
  const npageFiltered = Math.ceil(
    filteredItems.length / productsPerPageFiltered
  );
  return (
    <div className={loading ? "AppLoading" : "App"}>
      {loading ? (
        <CardLoading />
      ) : (
        <>
          <div>
            <div className="buttons-container">
              {filters.map((category, idx) => (
                <button
                  onClick={() => handleFilterButtonClick(category)}
                  className={`button ${
                    selectedFilters?.includes(category) ? "active" : ""
                  }`}
                  key={`filters-${idx}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {filteredItems == 0 ? (
            <>
              <div className="Box">
                {prods.map((prod) => (
                  <ProdCard data={prod} key={uuidv4()} />
                ))}
              </div>
              <PaginationComponent
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                npage={npage}
                handleChange={handleChange}
                activePage={activePage}
              />
            </>
          ) : (
            <>
              <div className="Box">
                {prodsFiltered.map((prod) => (
                  <ProdCard data={prod} key={uuidv4()} />
                ))}
              </div>
              <PaginationComponent
                filteredItems={filteredItems}
                currentPage={currentPageFiltered}
                setCurrentPage={setCurrentPageFiltered}
                npage={npageFiltered}
                handleChange={handleChangeFiltered}
                activePage={activePageFiltered}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
