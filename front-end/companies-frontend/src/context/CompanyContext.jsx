import { createContext, useContext, useEffect, useState } from "react"
const CompanyContext = createContext();
const API_BASEURL = process.env.REACT_APP_API_BASEURL;
export const CompanyProvider = ({ children }) => {
    const [companies, setCompanies] = useState([]);

    const [locations, setLocations] = useState([]);
    const [industries, setIndustries] = useState([]);

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [industry, setIndustry] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [totalPages, setTotalPages] = useState(1);

    // Fetch companies from backend
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                setLoading(true);

                const offset = (currentPage - 1) * itemsPerPage;
                const filterResponse = await fetch(`${API_BASEURL}/api/filters`);
                const filterData = await filterResponse.json();
                setLocations(filterData.locations);
                setIndustries(filterData.industries);
                const res = await fetch(
                    `${API_BASEURL}/api/companies?offset=${offset}&limit=${itemsPerPage}&search=${search}&location=${location}&industry=${industry}`
                );

                if (!res.ok) throw new Error("Failed to fetch companies");

                const data = await res.json();

                setCompanies(data.data);
                setTotalPages(data.totalPages);


            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, [currentPage, search, location, industry]);

    // Reset page when filters/search change
    useEffect(() => {
        setCurrentPage(1);
    }, [search, location, industry]);

    return (
        <CompanyContext.Provider
            value={{
                companies,  
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
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompany = () => useContext(CompanyContext);