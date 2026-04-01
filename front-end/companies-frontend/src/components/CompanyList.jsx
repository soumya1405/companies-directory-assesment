import "../styles/CompanyList.css";
import CompanyCard from "./CompanyCard";
import { useCompany } from "../context/CompanyContext";
import Pagination from "./Pagination";
import closeIcon from "../assets/close.png";
import errorIcon from "../assets/deadline.png";

const CompanyList = () => {
  const { companies, loading, error } = useCompany();

  if (loading)
  return (
    <div className="status">
      <img src={closeIcon} alt="Loading" style={{ width: "24px", marginRight: "8px" }} />
      Loading...
    </div>
  );

if (error)
  return (
    <div className="status">
      <img src={errorIcon} alt="Error" style={{ width: "24px", marginRight: "8px" }} />
      {error}
    </div>
  );
  if (!companies.length)
    return <div className="status">No companies found</div>;

  return (
    <>
      <div className="card-container">
        {companies.map(c => (
          <CompanyCard key={c.id || c._id} company={c} />
        ))}
      </div>

      <Pagination />
    </>
  );
};

export default CompanyList;