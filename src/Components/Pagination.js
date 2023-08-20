import React from "react";
import { Pagination } from "flowbite-react";

const PaginationComponent = ({
  currentPage,
  setCurrentPage,
  npage,
  handleChange,
  activePage,
  filteredItems,
}) => {
  return (
    <div className="paginationContainer">
      <Pagination
        disabled
        currentPage={currentPage}
        layout="navigation"
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
        totalPages={npage}
      />
      <div>
        {filteredItems?.length < 4 ? (
          <button
            disabled={filteredItems?.length < 4 ? true : false}
            onClick={() => handleChange(4)}
            className="showButton4Disabled"
          >
            <i className="bi bi-columns-gap"></i> 4 per Page
          </button>
        ) : (
          <button
            onClick={() => handleChange(4)}
            className={activePage == "4" ? "showButton4active" : "showButton4"}
          >
            <i className="bi bi-columns-gap"></i> 4 per Page
          </button>
        )}
        {filteredItems?.length < 8 ? (
          <button
            disabled={filteredItems?.length < 8 ? true : false}
            onClick={() => handleChange(8)}
            className="buttonDisabled8"
          >
            <i className="bi bi-columns-gap"></i> 8 per Page
          </button>
        ) : (
          <button
            onClick={() => handleChange(8)}
            className={activePage == "8" ? "showButton8active" : "showButton8"}
          >
            <i className="bi bi-columns-gap"></i> 8 per Page
          </button>
        )}
        {filteredItems?.length < 12 ? (
          <button
            disabled={filteredItems?.length < 12 ? true : false}
            onClick={() => handleChange(12)}
            className="buttonDisabled12"
          >
            <i className="bi bi-columns-gap"></i> 12 per Page
          </button>
        ) : (
          <button
            onClick={() => handleChange(12)}
            className={
              activePage == "12" ? "showButton12active" : "showButton12"
            }
          >
            <i className="bi bi-columns-gap"></i> 12 per Page
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationComponent;
