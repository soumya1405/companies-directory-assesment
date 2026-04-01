const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const companies = require("./data/companies.json");

app.get("/api/companies", (req, res) => {
  let {
    offset = 0,
    limit = 100,
    search = "",
    location = "",
    industry = ""
  } = req.query;

  
  offset = parseInt(offset);
  limit = parseInt(limit);

  let filtered = companies.filter((company) => {
    return (
      company.name.toLowerCase().includes(search.toLowerCase()) &&
      (location ? company.location === location : true) &&
      (industry ? company.industry === industry : true)
    );
  });


  const total = filtered.length;


  const paginatedData = filtered.slice(offset, offset + limit);

  res.json({
    data: paginatedData,
    total,
    offset,
    limit,
    totalPages: Math.ceil(total / limit),
  });
});


app.get("/api/filters", (req, res) => {
  try {
    const locations = [...new Set(companies.map(c => c.location))];
    const industries = [...new Set(companies.map(c => c.industry))];

    res.json({
      locations,
      industries
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch filters" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});