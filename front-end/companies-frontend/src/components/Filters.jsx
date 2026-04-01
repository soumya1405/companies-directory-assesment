import "../styles/Filters.css";
import { useCompany } from "../context/CompanyContext";

const Filters = () => {
  const {
    search,
    setSearch,
    location,
    setLocation,
    industry,
    setIndustry,
    locations,
    industries
  } = useCompany();
  return (
    <div className="filters">
      {/* Search */}
      <input
        type="text"
        placeholder="Search company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Location Dropdown */}
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">All Locations</option>
        {locations.map((loc, index) => (
          <option key={index} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Industry Dropdown */}
      <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
        <option value="">All Industries</option>
        {industries.map((ind, index) => (
          <option key={index} value={ind}>
            {ind}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;