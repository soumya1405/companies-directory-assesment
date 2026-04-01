import "../styles/Pagination.css";
import { useCompany } from "../context/CompanyContext";

const Pagination = () => {
  const {
     companies,         // ✅ paginated backend data
        locations,
        industries,
        loading,
        error,
        search,
        setSearch,
        location,
        setLocation,
        industry,
        setIndustry,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPages,  
  } = useCompany();

  // const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const pages = [...Array(totalPages).keys()].map(n => n + 1);

  return (
    <div className="pagination">
      {/* Prev */}
      <button
        onClick={() => setCurrentPage(p => p - 1)}
        disabled={currentPage === 1}
      >
        ⬅ Prev
      </button>

      {/* Page Numbers */}
      {pages.map(p => (
        <button
          key={p}
          className={currentPage === p ? "active" : ""}
          onClick={() => setCurrentPage(p)}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrentPage(p => p + 1)}
        disabled={currentPage === totalPages}
      >
        Next ➡
      </button>
    </div>
  );
};

export default Pagination;