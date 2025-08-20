import React from "react";

function MainContainer({ sortBy, setSortBy, filterBy, setFilterBy }) {
  return (
    <div className="main-container">
      <div className="filters">
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Select...</option>
            <option value="alpha">Alphabetically</option>
            <option value="price">Price</option>
          </select>
        </label>
        
        <label>
          Filter by type:
          <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Energy">Energy</option>
            {/* Add more types as needed based on your data */}
          </select>
        </label>
      </div>
    </div>
  );
}

export default MainContainer;