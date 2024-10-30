import React from "react";

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <button
          onClick={() => paginate(number)}
          className="pagination"
          key={number}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
