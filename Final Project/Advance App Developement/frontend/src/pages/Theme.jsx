import React from 'react';
import Nav_Bar from '../components/Nav_Bar';


const ThemePage = () => {
  
  const themes = [
    {
      id: 1,
      name: "Magic Show",
      description: "Experience the wonder and excitement of our mesmerizing Magic Show theme.",
      image: "https://t4.ftcdn.net/jpg/04/30/04/89/360_F_430048989_DT3SXldSs4kmpKry91yV9WozgbbM8GVB.jpg",
      cost: "$50"
    },
    {
      id: 2,
      name: "Beach",
      description: "Relax and unwind with the calming vibes of the beach-themed decorations.",
    //   image: beachImage 
    },
    {
      id: 3,
      name: "Beach",
      description: "Relax and unwind with the calming vibes of the beach-themed decorations.",
    //   image: beachImage 
    },
    {
      id: 4,
      name: "Beach",
      description: "Relax and unwind with the calming vibes of the beach-themed decorations.",
    //   image: beachImage 
    },
    {
      id: 5,
      name: "Beach",
      description: "Relax and unwind with the calming vibes of the beach-themed decorations.",
    //   image: beachImage 
    },
    
  ];

  return (
    <>
    <Nav_Bar/>
    <br/>
    <div className="theme-page">
      <h1>Theme Selection</h1>
      <br/>
      <div className="theme-cards">
        {themes.map(theme => (
          <div key={theme.id} className="theme-card">
            <img src={theme.image} alt={theme.name} />
            <h2>{theme.name}</h2>
            <p>{theme.description}</p>
            <p>{theme.cost}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ThemePage;
