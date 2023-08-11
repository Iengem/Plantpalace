import React, { useState } from 'react';
import '../Trial/Trial.css';


const itemsData = [
  { id: 'Medium', name: 'Agbb' },
  { id: 'Small', name: 'Onions'},
  { id: 'Small', name: 'Tomato' },
  { id: 'Large', name: 'Iroko' },
  { id: 'Large', name: 'Plantain' },

  // Add more items as needed
];

function Trial() {
  const [activeFilter, setActiveFilter] = useState(itemsData[0].id);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="Trial">
      <div id="filterButtons">
        {itemsData.map(item => (
          <button
            key={item.id}
            className={`filter-button ${activeFilter === item.id ? 'active' : ''}`}
            onClick={() => handleFilterClick(item.id)}
          >
            {item.id}
          </button>
        ))}
      </div>
      <div id="itemsContainer">
        {itemsData.map(item => (
          <div
            key={item.id}
            className={`item ${activeFilter === item.id ? 'active' : ''}`}
            style={{ display: activeFilter === item.id ? 'block' : 'none' }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trial;

