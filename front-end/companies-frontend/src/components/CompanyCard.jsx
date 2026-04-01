import "../styles/CompanyCard.css";
import locationIcon from "../assets/location.png";
import industryIcon from "../assets/office-building.png";
const CompanyCard = ({ company }) => {
  return (
    <div className="card">
      <h2>{company.name}</h2>
      <p>
        <img src={locationIcon} alt="Location" style={{ width: "20px", marginRight: "6px" }} />
        {company.location}
      </p>

      <p>
        <img src={industryIcon} alt="Industry" style={{ width: "22px", marginRight: "6px" }} />
        {company.industry}
      </p>
    </div>
  );
};

export default CompanyCard;