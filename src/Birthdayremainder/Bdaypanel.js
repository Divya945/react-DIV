import React, { useState } from 'react';
import data from './data.js';
import './Blist.css';
import List from './BList.js';

export default function Bdaypanel() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <div className="bodypanel">
        <h3>{people.length} Birthady Today</h3>
        <List people={people} />
        <button className="clearBlist" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </>
  );
}
