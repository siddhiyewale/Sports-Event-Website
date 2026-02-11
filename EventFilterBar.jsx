import React from "react";
import "./EventFilterBar.css";

const EventFilterBar = ({
  search,
  setSearch,
  city,
  setCity,
  price,
  setPrice,
  cities,
  onReset
}) => {

  const isDefault =
    search === "" &&
    city === "" &&
    Number(price) === 2000;

  return (
    <div className="filter-bar">

      <input
        type="text"
        placeholder="Search upcoming events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">All Cities</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <div className="price-filter">
        <span>Max Price: ₹{price}</span>
        <input
          type="range"
          min="0"
          max="2000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button
        className="reset-btn"
        onClick={onReset}
        disabled={isDefault}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default EventFilterBar;
