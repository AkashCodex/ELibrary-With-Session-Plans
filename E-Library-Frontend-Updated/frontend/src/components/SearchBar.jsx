import React from "react";

const SearchBar = ({ keyword, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={keyword}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by title or author"
        className="p-2 border rounded w-full max-w-md"
      />
    </div>
  );
};

export default SearchBar;
