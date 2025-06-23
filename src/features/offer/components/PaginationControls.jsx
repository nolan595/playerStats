const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
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
    <nav className="inline-flex items-center space-x-1 text-xs">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((p, idx) =>
        p === "gap" ? (
          <span key={idx} className="px-1 text-gray-400">...</span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(p)}
            className={`px-2 py-1 rounded border ${
              p === currentPage
                ? "bg-purple-500 text-white border-purple-500"
                : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
};

export default PaginationControls;
