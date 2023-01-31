import React from 'react';

export default function Card({ el }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={el.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{el.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <a href={`/characters/info/${el.id}`} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}
