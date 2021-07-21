import React from "react";

function SearchForm({ keyword, setKeyword, fetchSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch(keyword);
  };

  return (
    <div className="search-bar">
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="Type keyword and press Enter"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </span>
      </form>
    </div>
  );
}

export default SearchForm;
