/* 
This component is meant to contain a controlled form (a form whose input values) are controlled by a piece of React state (with useState). However, the final submitted value(s) of the form needs to be shared with the GifContainer so be careful about where you define your final submitted state!

TODO:
- Convert this form into a controlled form
- Handle form submissions by setting a searchTerm state value that can be shared with the GifContainer component
*/

import { useState } from "react";

function GifSearch({ setSearchTerm }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchValue);
    setSearchValue("");
  };

  return (
    <form className="futuristic-form" onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Enter a Search Term</label>
      <input
        value={searchValue}
        onChange={handleChange}
        type="text"
        className="futuristic-input"
        id="searchInput"
      />
      <button type="submit" className="futuristic-btn">
        Search
      </button>
    </form>
  );
}

export default GifSearch;
