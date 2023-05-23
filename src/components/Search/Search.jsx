import React from 'react';

function Search() {
  return (
    <div className="flex flex-row font-balto">
      <div>
        <input
          type="text"
          placeholder="Search here"
          className="p-1 bg-white-50 font-balto font-normal "
        />
      </div>
    </div>
  );
}

export default Search;
