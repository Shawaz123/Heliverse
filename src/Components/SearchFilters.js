import React, { useState } from "react";
import item from './heliverse.json'

const SearchFilters = ({ item}) => {
  const [filters, setFilters] = useState({
    domain: "",
    gender: "",
    availabile: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  const filteredData = data.filter((item) => {
    return (
      (!filters.domain || item.domain === filters.domain) &&
      (!filters.gender || item.gender === filters.gender) &&
      (!filters.availabile || item.availabile === filters.availabile)
    );
  });

  return (
    <div>
      <label>
        Domain:
        <select name="domain" value={filters.domain} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>
      </label>
      <label>
        Gender:
        <select name="gender" value={filters.gender} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        Availability:
        <select name="availability" value={filters.availabile} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </label>
      {filteredData.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Domain: {item.domain}</p>
          <p>Gender: {item.gender}</p>
          <p>Availability: {item.availabile}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchFilters;
