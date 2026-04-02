import "../styles/Pagination.css";
import { useCompany } from "../context/CompanyContext";

const Pagination = () => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
  } = useCompany();


  const pages = [...Array(totalPages).keys()].map(n => n + 1);

  return (
    <div className="pagination">

      <button
        onClick={() => setCurrentPage(p => p - 1)}
        disabled={currentPage === 1}
      >
        ⬅ Prev
      </button>

      {pages.map(p => (
        <button
          key={p}
          className={currentPage === p ? "active" : ""}
          onClick={() => setCurrentPage(p)}
        >
          {p}
        </button>
      ))}

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