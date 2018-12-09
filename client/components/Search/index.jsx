import React from 'react';

const Search = ({ searchText, handleOnChange, handleOnSearch }) =>
    <div className="">
      <form>
        <div className="form-group">
          <input
            value={searchText}
            onChange={handleOnChange}
            type="text" 
            className="form-control" 
            id="gitcheats" 
            aria-describedby="gitcheats" 
            placeholder="Search Sheets"
          />
        </div>
      </form>
    </div>
 
export default Search;