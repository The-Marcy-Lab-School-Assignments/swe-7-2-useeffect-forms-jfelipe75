/* 
This component is meant to contain a controlled form (a form whose input values) are controlled by a piece of React state (with useState). However, the final submitted value(s) of the form needs to be shared with the GifContainer so be careful about where you define your final submitted state!

TODO:
- Convert this form into a controlled form
- Handle form submissions by setting a searchTerm state value that can be shared with the GifContainer component
*/

import { useState } from "react";

function GifSearch({ setSearchTerm }) {
  // Local state to control the input value
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    // Update the local state as the user types
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set the search term in the parent component
    setSearchTerm(searchValue);
    // Clear the input after submission
    setSearchValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Enter a Search Term</label>
      <input
        value={searchValue} // Controlled input tied to local state
        onChange={handleChange}
        type="text"
        className="form-control"
        id="searchInput"
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
}

export default GifSearch;
