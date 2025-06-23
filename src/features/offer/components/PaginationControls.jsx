import React from "react";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  // Helper to build page buttons (adds gaps for large ranges)
  const buildPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("gap");
      }
    }
    return pages;
  };

  const pages = buildPages();

  return (
    <nav className="inline-flex items-center space-x-1 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((p, idx) =>
        p === "gap" ? (
          <span key={idx} className="px-2 py-1 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 text-sm rounded border border-gray-300 ${
              p === currentPage
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
};

export default PaginationControls;
