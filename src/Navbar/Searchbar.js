import React, { useState } from 'react';

export default function Searchbar() {
  const [Searchbar, setSearchbar] = useState();
  return (
    <>
      <div className="searchbar">
        <div className="inputs">
          <input
            className="searchinput"
            type="text"
            value={Searchbar}
            placeholder="Seach Here"
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </div>
        <div className="input-display">
          <b>{Searchbar}</b>
        </div>
      </div>
    </>
  );
}
